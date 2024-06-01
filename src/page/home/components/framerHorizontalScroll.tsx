import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { HTMLAttributes, useRef } from 'react';
import mergeClassNames from 'merge-class-names';

type Props = HTMLAttributes<HTMLDivElement> & {
  trackClassName?: string;
  thumbClassName?: string;
};

// note(simek): matches "w-16" thumb class
const THUMB_WIDTH = 64;

export function FramerHorizontalScroll({
  children,
  className,
  trackClassName,
  thumbClassName,
  ...rest
}: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollBarRef = useRef<HTMLDivElement>(null);

  const { scrollXProgress } = useScroll({ container: scrollRef });
  const spring = useSpring(scrollXProgress, {
    stiffness: 250,
    damping: 30,
    restDelta: 0.001,
  });
  const translateX = useTransform(spring, (value) => {
    if (!scrollBarRef?.current) return 0;
    return value * (scrollBarRef.current?.offsetWidth - THUMB_WIDTH);
  });

  return (
    <div className="relative z-10" {...rest}>
      <div
        ref={scrollRef}
        className={mergeClassNames(
          'framer-scroll flex overflow-x-hidden overflow-y-hidden pb-8',
          'max-lg-gutters:max-w-[100vw] max-lg-gutters:overflow-x-auto',
          'max-md-gutters:w-[100vw]',
          className
        )}>
        {children}
      </div>
      <div
        ref={scrollBarRef}
        className={mergeClassNames(
          'absolute inset-x-16 h-1 rounded-sm bg-element opacity-0 max-md-gutters:opacity-100',
          trackClassName
        )}>
        <motion.div
          className={mergeClassNames('h-1 w-16 rounded-sm bg-palette-gray8', thumbClassName)}
          style={{ translateX }}
        />
      </div>
    </div>
  );
}
