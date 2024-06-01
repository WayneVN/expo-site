import mergeClasses from 'merge-class-names';
import { ArrowUpRightIcon } from '@expo/styleguide-icons';
import { motion, Variants } from 'framer-motion';
import type { ReactElement, FC } from 'react';


type Props = {
  title: string;
  description: string;
  href: string;
  imageUrl: string;
  cta?: ReactElement;
  className?: string;
  overlayClassName?: string;
};

const snackAppVariants: Variants = {
  offscreen: {
    scale: 1,
  },
  onscreen: {
    scale: [1, 1.025, 1],
    transition: {
      type: 'tween',
      duration: 0.75,
    },
  },
};

export const SnackApp: FC<Props> = ({
  title,
  description,
  href,
  imageUrl,
  cta,
  className,
  overlayClassName,
}) => {
  return (
    <motion.div variants={snackAppVariants} className="flex flex-col items-center gap-1.5">
      <div
        className={mergeClasses(
          'dark-theme relative min-h-[512px] min-w-[270px] duration-500 hocus:scale-1025',
          className
        )}>
        <div
          className={mergeClasses(
            'absolute bottom-[30px] z-10 mx-[31px] rounded-b-2xl bg-[rgba(32,42,47,0.75)] px-6 py-5 backdrop-blur-sm',
            overlayClassName
          )}>
          <h4 className='text-default text-[16px] font-semibold leading-[1.625] tracking-[-0.011rem]'>{title}</h4>
          <p className="text-default font-normal text-[14px] leading-[1.5715] tracking-[-0.006rem] opacity-80 ">{description}</p>
          <a
            href={href}
            className='inline-flex border border-solid font-medium gap-2 items-center whitespace-nowrap transition h-9 px-4 text-xs border-button-quaternary shadow-none active:scale-98 mb-2 mt-4 w-full justify-center rounded-full bg-palette-white text-palette-black hocus:bg-palette-white hocus:text-palette-black hocus:opacity-80'>
            Try It<ArrowUpRightIcon className="text-palette-gray6" />
          </a>
        </div>
        <img
          src={imageUrl}
          className="absolute inset-0"
          alt={title}
          loading="lazy"
          width="100%"
          height="100%"
        />
      </div>
      {cta}
    </motion.div>
  );
}
