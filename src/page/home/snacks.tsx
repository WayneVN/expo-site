// import { Button, mergeClasses } from '@expo/styleguide';
import mergeClasses from 'merge-class-names';
import { ArrowUpRightIcon, Earth02Icon } from '@expo/styleguide-icons';
import { motion } from 'framer-motion';

import { FramerHorizontalScroll, SnackApp } from './components';

export function Snacks() {
  return (
    <section className="pb-24 pt-32 max-md-gutters:py-16">
      <div className='relative mx-auto w-full max-w-screen-xl-gutters px-6'>
        <div
          className={mergeClasses(
            'flex gap-16',
            'max-xl-gutters:flex-col max-xl-gutters:items-center',
            'max-md-gutters:gap-8'
          )}>
          <div className="flex flex-col gap-6">
            <h2 className='text-default tracking-[-0.021rem] text-[39px] leading-[1.3076] max-md-gutters:text-[34px] max-md-gutters:leading-[1.2941] max-sm-gutters:text-[29px] max-sm-gutters:leading-[1.3103] mt-6 font-bold'>
              Try it for yourself
            </h2>
            <p className="font-normal text-[16px] leading-[1.625] tracking-[-0.011rem] text-secondary">
              Fast animations. Genuine native components. Edit in your browser and preview on your
              device in seconds.
            </p>
            <div>
              <p className="font-normal text-[16px] leading-[1.625] tracking-[-0.011rem] text-secondary mb-3">
                Runs natively on:
              </p>
              <div className="flex gap-2">
                <p title="Android" icon="Android" className="select-none" />
                <p title="iOS" icon="Apple" className="select-none" />
                <p title="Web" customIcon={Earth02Icon} className="select-none" />
              </div>
            </div>
          </div>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.66 }}
            transition={{ staggerChildren: 0.15, duration: 0.5 }}>
            <FramerHorizontalScroll>
              <SnackApp
                title="Finance app"
                description="Track expenses. 60 FPS animations."
                href="https://snack.expo.dev/@expo-team-snacks/finance-app"
                imageUrl="https://expo.dev/static/home/app-finance.webp"
                className="min-w-[278px]"
                overlayClassName="bottom-[23px] rounded-b-[36px] min-h-[174px]"
              />
              <SnackApp
                title="Image app"
                description="Upload images. Add stickers. Save to device."
                href="https://snack.expo.dev/@expo-team-snacks/image-app"
                imageUrl="https://expo.dev/static/home/app-image.webp"
                cta={
                  <a
                    href="https://docs.expo.dev/tutorial/create-your-first-app"
                    className="inline-flex border border-solid rounded-md font-medium gap-2 items-center whitespace-nowrap transition h-9 px-4 text-xs border-button-quaternary bg-button-quaternary shadow-none hocus:bg-button-quaternary-hover active:scale-98 relative -mt-3 text-secondary"
                  >
                    Build It Step-by-Step
                    <ArrowUpRightIcon />
                  </a>
                }
              />
              <SnackApp
                title="Social media app"
                description="Native navigation. Fast lists. Ready to scroll."
                imageUrl="https://expo.dev/static/home/app-social.webp"
                href="https://snack.expo.dev/@expo-team-snacks/social-app"
                className="min-w-[266px]"
                overlayClassName="mx-[24px] rounded-b-md min-h-[174px] bottom-[22px] left-[-1px]"
              />
            </FramerHorizontalScroll>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
