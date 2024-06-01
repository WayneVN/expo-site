import { FolderIcon, NpmIcon, Speedometer02Icon, Users01Icon } from '@expo/styleguide-icons';
import { motion } from 'framer-motion';

import { StatsTile } from './components';
import { DotsPattern } from './illustrations';


export const Stats = () => {
  return (
    <motion.section
      className="relative bg-screen py-24"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.75 }}>
      <DotsPattern name="statsPattern" className="fill-palette-gray7 dark:fill-palette-gray4" />
      <div className="relative mx-auto w-full px-6 !max-w-[775px]">
        <h2 className="text-default text-[25px] font-semibold leading-[1.4] tracking-[-0.021rem] max-md-gutters:text-[22px] max-md-gutters:leading-[1.409] max-sm-gutters:text-[19px] max-sm-gutters:leading-[1.5263] mb-12 text-center">
          An open-source platform built for production apps
        </h2>
        <div className="grid grid-cols-4 gap-6 max-md-gutters:grid-cols-2 max-md-gutters:gap-y-12">
          <StatsTile
            Icon={Speedometer02Icon}
            title="120 FPS"
            description="Animations"
            iconClassName="text-palette-blue10"
            position={1}
          />
          <StatsTile
            Icon={FolderIcon}
            title="750K+"
            description="Projects"
            iconClassName="text-palette-orange9"
            position={2}
          />
          <StatsTile
            Icon={NpmIcon}
            title="75+"
            description="Premade modules"
            iconClassName="text-palette-red9"
            position={3}
          />
          <StatsTile
            Icon={Users01Icon}
            title=">50%"
            description="React Native projects using Expo"
            iconClassName="text-palette-pink9"
            position={4}
          />
        </div>
      </div>
    </motion.section>
  );
}
