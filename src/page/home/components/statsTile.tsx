import { motion, Variants } from 'framer-motion';
import { ComponentType, HTMLAttributes } from 'react';

type Props = {
  Icon: ComponentType<HTMLAttributes<SVGSVGElement>>;
  title: string;
  description: string;
  iconClassName: string;
  position: number;
};

function getStatTileVariants(position: number): Variants {
  return {
    offscreen: {
      y: 80,
      scale: 0.66,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0,
        duration: 0.4 + 0.3 * position,
      },
    },
  };
}

export function StatsTile({ Icon, title, description, iconClassName, position }: Props) {
  return (
    <motion.div className="flex flex-col items-center" variants={getStatTileVariants(position)}>
      <div className=" rounded-md border border-secondary bg-default shadow-xs mb-4 p-2">
        <Icon className={`icon-xl ${iconClassName}`} />
      </div>
      <h3 className="text-default text-[25px] font-semibold leading-[1.4] max-md-gutters:text-[22px] max-md-gutters:leading-[1.409] max-sm-gutters:text-[19px] max-sm-gutters:leading-[1.5263] !tracking-[0.01em]">
        {title}
      </h3>
      <p className='font-normal text-[16px] leading-[1.625] tracking-[-0.011rem] text-secondary text-center'>
        {description}
      </p>
    </motion.div>
  );
}
