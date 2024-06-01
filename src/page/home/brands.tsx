import { ArrowRightIcon } from '@expo/styleguide-icons';
import { motion, useReducedMotion, Variants } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import mergeClassNames from 'merge-class-names';

import { FramerHorizontalScroll } from './components';
import { SWIPE_THRESHOLD, swipePower } from '~/ui/foundations/gestures';
import { useAnimationLooper } from '~/ui/patterns/useAnimationLooper';

type Props = {
  headline?: string;
  className?: string;
};

export function Brands({ className, headline = 'Trusted by top companies' }: Props) {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const { ref, inView } = useInView();
  const { setPlay } = useAnimationLooper(
    () => setCurrentPage((prevPage) => (prevPage + 1) % BRANDS.length),
    8000,
    !shouldReduceMotion
  );

  useEffect(() => {
    setPlay(!shouldReduceMotion && inView);
  }, [inView]);

  return (
    <section className={`py-20 max-md-gutters:pt-12 ${className}`} ref={ref}>
      <div className='relative mx-auto w-full max-w-screen-xl-gutters px-6'>
        <div className='mb-10 flex items-center justify-between max-md-gutters:flex-col max-md-gutters:items-center max-md-gutters:gap-y-3'>
          <p className='text-default font-medium text-[16px] leading-[1.625] tracking-[-0.011rem]'>{headline}</p>
          <a
            href="/customers"
            className="inline-flex border border-solid font-medium gap-2 items-center whitespace-nowrap transition h-9 text-xs border-button-secondary bg-button-secondary text-button-secondary shadow-xs hocus:bg-button-secondary-hover active:scale-98 rounded-full px-5 rounded-full px-5">
            <ArrowRightIcon /> Read Their Stories
          </a>
        </div>
        <motion.div
          ref={containerRef}
          className="max-lg-gutters:hidden"
          onHoverStart={() => setPlay(false)}
          onHoverEnd={() => setPlay(true)}>
          <motion.div
            className="flex cursor-grab items-center justify-center gap-x-28"
            drag="x"
            dragMomentum={false}
            dragConstraints={containerRef}
            dragElastic={0}
            onDragEnd={(_, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -SWIPE_THRESHOLD) {
                setCurrentPage((prevPage) => (prevPage + 1) % BRANDS.length);
              } else if (swipe > SWIPE_THRESHOLD) {
                setCurrentPage((prevPage) =>
                  prevPage === 0 ? BRANDS.length - 1 : Math.abs(prevPage - 1) % BRANDS.length
                );
              }
            }}>
            {BRANDS[currentPage].map((brand, index) => (
              <motion.div
                key={`${brand}-logo`}
                className="flex min-h-[100px] max-w-[184px] items-center justify-center"
                viewport={{ once: true }}
                variants={getLogosVariants(index)}
                initial="offscreen"
                whileInView="onscreen">
                <img
                  src={`https://expo.dev/static/home/logos/${brand}-color.svg`}
                  alt={`${brand}-logo`}
                  className={LOGO_CLASSES}
                />
              </motion.div>
            ))}
          </motion.div>
          <div className="mt-6 flex justify-center gap-3">
            {[...Array(Math.ceil(BRANDS.length)).keys()].map((page) => (
              <div
                key={`paginator-${page}`}
                onClick={() => setCurrentPage(page)}
                className={`size-2.5 cursor-pointer rounded-full bg-element ${page === currentPage && 'bg-palette-gray8'}`}
              />
            ))}
          </div>
        </motion.div>
        <FramerHorizontalScroll
          className="-mx-6 hidden gap-16 px-6 max-lg-gutters:flex"
          trackClassName="max-lg-gutters:opacity-100 max-lg-gutters:inset-x-32 max-md-gutters:inset-x-16">
          {BRANDS.flat().map((brand) => (
            <div
              key={`${brand}-logo-mobile`}
              className="flex min-h-[90px] min-w-[140px] items-center justify-center">
              <img
                src={`https://expo.dev/static/home/logos/${brand}-color.svg`}
                alt={`${brand}-logo`}
                className={LOGO_CLASSES}
              />
            </div>
          ))}
        </FramerHorizontalScroll>
      </div>
    </section>
  );
}

function getLogosVariants(index: number): Variants {
  return {
    offscreen: {
      translateY: 6,
      opacity: 0,
    },
    onscreen: {
      translateY: 0,
      opacity: 1,
      transition: {
        duration: 0.35,
        delay: index * 0.05,
      },
    },
  };
}


export const LOGO_CLASSES = mergeClassNames(
  'backface-hidden pointer-events-none transform-gpu select-none !rounded-none',
  'dark:brightness-[0.35] dark:grayscale dark:invert dark:saturate-[0.15] dark:sepia-[0.01]'
);

const BRANDS = [
  ['better', 'blackline', 'bounce', 'brex'],
  ['cameo', 'codecademy', 'dailypay', 'facepunch'],
  ['few', 'front', 'goody', 'insider', 'lirr'],
  ['petal', 'pizza-hut', 'plt', `portify`, 'prodigy'],
  ['shapeshift', 'spikeball', 'trinet', 'zoe'],
];
