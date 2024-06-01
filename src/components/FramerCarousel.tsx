import { mergeClasses } from '@expo/styleguide';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { HTMLAttributes, ReactNode, useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { SWIPE_THRESHOLD, swipePower, useAnimationLooper } from '~/ui';


type CarouselData = {
  content: ReactNode;
  activeColor: string;
};

type Props = HTMLAttributes<HTMLDivElement> & {
  data: CarouselData[];
};

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 60 : -60,
      opacity: 0,
    };
  },
  center: {
    x: 0,
    opacity: 1,
  },
};

export function FramerCarousel({ data }: Props) {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [[page, direction], setPage] = useState([0, 0]);
  const { ref, inView } = useInView();
  const { setPlay } = useAnimationLooper(
    () => setPage(([prevPage]) => [(prevPage + 1) % data.length, 1]),
    5000,
    !shouldReduceMotion
  );

  useEffect(() => {
    setPlay(!shouldReduceMotion && inView);
  }, [inView]);

  return (
    <div ref={ref} className="max-lg-gutters:hidden">
      <motion.div
        className="relative min-h-[500px] max-lg-gutters:hidden"
        ref={containerRef}
        onHoverStart={() => setPlay(false)}
        onHoverEnd={() => setPlay(true)}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            className="backface-hidden absolute flex size-full flex-1 grow transform-gpu cursor-grab justify-center"
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            drag="x"
            transition={{
              duration: 0.25,
              ease: 'linear',
              x: { duration: shouldReduceMotion ? 0 : 0.3 },
              opacity: { duration: 0.4 },
            }}
            dragConstraints={containerRef}
            dragElastic={shouldReduceMotion ? 0 : 0.2}
            onDragEnd={(_, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -SWIPE_THRESHOLD) {
                setPage(([prevPage]) => [(prevPage + 1) % data.length, 1]);
              } else if (swipe > SWIPE_THRESHOLD) {
                setPage(([prevPage]) => [prevPage === 0 ? data.length - 1 : prevPage - 1, 0]);
              }
            }}>
            {data[page].content}
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-x-0 bottom-0 z-10 flex max-w-[596px] justify-center gap-2.5 py-8">
          {data.map((value, index) => (
            <div
              key={`slide-${index}`}
              className={`h-1.5 w-[90px] cursor-pointer rounded-sm bg-element ${index === page && value.activeColor}`}
              onClick={() => setPage([index, page > index ? 0 : 1])}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
