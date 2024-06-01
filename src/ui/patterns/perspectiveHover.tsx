// import { mergeClasses } from '@expo/styleguide';
import mergeClasses from 'merge-class-names';
import clamp from 'lodash/clamp';
import React, { HTMLAttributes, useRef, useState, MouseEvent, CSSProperties } from 'react';

const defaultStyles: CSSProperties = {
  transformStyle: 'preserve-3d',
};

type Props = HTMLAttributes<HTMLDivElement> & {
  easing?: string;
  scale?: number;
  speed?: number;
  perspective?: number;
  rotationLimit?: number;
  xTiltModifier?: number;
  yTiltModifier?: number;
};

export function PerspectiveHover({
  children,
  easing = 'cubic-bezier(.03,.98,.52,.99)',
  scale = 1,
  speed = 500,
  perspective = 1000,
  rotationLimit = 10,
  xTiltModifier = 1,
  yTiltModifier = 1,
  className,
  onMouseEnter,
  onMouseMove,
  onMouseLeave,
}: Props) {
  const [tiltStyles, setTiltStyles] = useState(defaultStyles);
  const element = useRef<HTMLDivElement | null>(null);
  const isMobileBrowser = false;

  const width = useRef<number>(0);
  const height = useRef<number>(0);
  const top = useRef<number>(0);
  const left = useRef<number>(0);
  const updateCall = useRef<number | null>(null);
  const transitionTimeout = useRef<number>();

  const isWindowDefined = typeof window !== 'undefined';

  const handleOnMouseEnter = (event: MouseEvent<HTMLDivElement>) => {
    updateElementPosition();
    setTransition();
    return onMouseEnter?.(event);
  };

  const handleOnMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (updateCall.current !== null && isWindowDefined) {
      window.cancelAnimationFrame(updateCall.current);
    }
    updateCall.current = requestAnimationFrame(() => updateElementStyle(event));
    return onMouseMove?.(event);
  };

  const handleOnMouseLeave = (event: MouseEvent<HTMLDivElement>) => {
    setTransition();
    handleReset();
    return onMouseLeave?.(event);
  };

  const updateElementStyle = (event: MouseEvent<HTMLDivElement>) => {
    const values = getValues(event);

    setTiltStyles((prevStyle) => ({
      ...prevStyle,
      transform: generateTransform(perspective, values.tiltY, values.tiltX, scale),
    }));
  };

  const getValues = ({ clientX, clientY }: MouseEvent<HTMLDivElement>) => {
    const x = clamp((clientX - left.current) / width.current, 0, 1);
    const y = clamp((clientY - top.current) / height.current, 0, 1);

    const tiltX = -((rotationLimit / 2 - y * rotationLimit) * xTiltModifier).toFixed(2);
    const tiltY = -((rotationLimit / 2 - x * rotationLimit) * yTiltModifier).toFixed(2);

    const angle =
      Math.atan2(
        clientX - (left.current + width.current / 2),
        -(clientY - (top.current + height.current / 2))
      ) *
      (180 / Math.PI);

    return { tiltX, tiltY, angle };
  };

  const updateElementPosition = () => {
    if (element.current) {
      const rect = element.current.getBoundingClientRect();
      width.current = rect.width;
      height.current = rect.height;
      top.current = rect.top;
      left.current = rect.left;
    }
  };

  const setTransition = () => {
    clearTimeout(transitionTimeout.current);

    setTiltStyles((prevStyle) => ({
      ...prevStyle,
      transition: `${speed}ms ${easing}`,
    }));

    // @ts-ignore TS confuses Node and DOM types
    transitionTimeout.current = setTimeout(() => {
      setTiltStyles((prevStyle) => ({
        ...prevStyle,
        transition: '',
      }));
    }, speed);
  };

  const handleReset = () => {
    if (isWindowDefined && !isMobileBrowser) {
      window.requestAnimationFrame(() => {
        setTiltStyles((prevStyle) => ({
          ...prevStyle,
          transform: generateTransform(perspective),
        }));
      });
    }
  };

  return (
    <div
      className={mergeClasses('inline-block', className)}
      style={{
        ...(isMobileBrowser ? {} : tiltStyles),
      }}
      ref={element}
      onMouseEnter={handleOnMouseEnter}
      onMouseMove={handleOnMouseMove}
      onMouseLeave={handleOnMouseLeave}>
      {children}
    </div>
  );
}

function generateTransform(perspective: number, tiltY = 0, tiltX = 0, scale = 1) {
  return `perspective(${perspective}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(${scale}, ${scale}, ${scale})`;
}
