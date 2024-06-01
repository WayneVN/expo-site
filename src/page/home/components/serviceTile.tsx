import { motion, useMotionTemplate, useMotionValue, Variants } from 'framer-motion';
import { ComponentType, HTMLAttributes, MouseEvent } from 'react';

// import { H3, P } from '~/ui/components/text';
import { PerspectiveHover } from '~/ui';

type Props = {
  Icon: ComponentType<HTMLAttributes<SVGSVGElement>>;
  title: string;
  description: string;
};

const serviceTileVariants: Variants = {
  offscreen: {
    scale: 0.65,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.25,
      duration: 1,
    },
  },
};

export function ServiceTile({ Icon, title, description }: Props) {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    pointerX.set(clientX - left);
    pointerY.set(clientY - top);
  }

  return (
    <motion.div variants={serviceTileVariants} onMouseMove={handleMouseMove}>
      <PerspectiveHover perspective={650} speed={2000} className="flex h-full overflow-hidden">
        <div className="group relative w-full rounded-lg border border-default bg-element p-5 pb-8">
          <Icon className="absolute -bottom-8 -right-8 size-40 text-palette-gray7 opacity-10" />
          <div className="flex flex-col max-sm-gutters:flex-row max-sm-gutters:items-center max-sm-gutters:gap-4">
            <Icon className="icon-xl mb-4 text-palette-white" />
            <h3 className="text-default text-[20px] font-semibold leading-[1.5] tracking-[-0.017rem] max-md-gutters:text-[18px] max-md-gutters:leading-[1.5555] max-sm-gutters:text-[16px] max-sm-gutters:leading-[1.625] relative z-10 mb-4">{title}</h3>
          </div>
          <p className="font-normal text-[16px] leading-[1.625] tracking-[-0.011rem] text-secondary relative z-10">
            {description}
          </p>
          <motion.div
            className="absolute -inset-px rounded-lg opacity-0 transition duration-500 group-hover:opacity-100"
            style={{
              background: useMotionTemplate`
                radial-gradient(
                  200px circle at ${pointerX}px ${pointerY}px,
                  rgb(142, 78, 198, 0.125),
                  transparent 80%
                )
              `,
            }}
          />
        </div>
      </PerspectiveHover>
    </motion.div>
  );
}
