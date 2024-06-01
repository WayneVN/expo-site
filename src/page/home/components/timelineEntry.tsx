import mergeClassNames from 'merge-class-names';
import { motion } from 'framer-motion';
import { HTMLAttributes, ReactElement } from 'react';

type Props = {
  title: string;
  description: string;
  content?: ReactElement;
  indicatorBorder: string;
} & Omit<HTMLAttributes<HTMLDivElement>, 'content'>;

export function TimelineEntry({ title, description, content, indicatorBorder, className }: Props) {
  return (
    <div className={mergeClassNames('relative max-lg-gutters:!mt-4', className)}>
      <motion.em
        className={mergeClassNames(
          'absolute z-10 mx-1.5 block size-5 rounded-full border-2 bg-default',
          indicatorBorder
        )}
        initial="offscreen"
        whileInView="onscreen"
        transition={{ duration: 1, delay: 0.25 }}
        viewport={{ once: true, amount: 1 }}
        variants={{
          offscreen: {
            scale: 0,
          },
          onscreen: {
            scale: [0, 1.2, 1],
          },
        }}
      />
      <h3 className="text-default text-[20px] font-semibold leading-[1.5] tracking-[-0.017rem] max-md-gutters:text-[18px] max-md-gutters:leading-[1.5555] max-sm-gutters:text-[16px] max-sm-gutters:leading-[1.625] mb-1">{title}</h3>
      <p className="font-normal text-[16px] leading-[1.625] tracking-[-0.011rem] text-secondary mb-6 ">
        {description}
      </p>
      <div className="flex justify-center">{content}</div>
    </div>
  );
}
