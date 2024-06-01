// import { mergeClasses } from '@expo/styleguide';
import mergeClasses from 'merge-class-names';
import {
  BuildIcon,
  EasSubmitIcon,
  LayersTwo02Icon,
  LifeBuoy01Icon,
  LineChartUp02Icon,
  PieChart03Icon,
} from '@expo/styleguide-icons';
import { motion } from 'framer-motion';

import { ServiceTile } from './components';
import { DotsPattern } from './illustrations';


export function Services() {
  return (
    <motion.section
      className="dark-theme relative bg-[#1A1D1E] py-24"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.45 }}
      transition={{ staggerChildren: 0.05 }}>
      <DotsPattern name="servicesPattern" className="dark-theme fill-icon-quaternary" />
      <div className='relative mx-auto w-full max-w-screen-xl-gutters px-6'>
        <h2 className="text-default text-[25px] font-semibold leading-[1.4] tracking-[-0.021rem] max-md-gutters:text-[22px] max-md-gutters:leading-[1.409] max-sm-gutters:text-[19px] max-sm-gutters:leading-[1.5263] mb-12 text-center">
          Services made for professionals
        </h2>
        <div
          className={mergeClasses(
            'mx-auto grid max-w-[775px] grid-cols-3 gap-6',
            'max-lg-gutters:grid-cols-2',
            'max-sm-gutters:grid-cols-auto-min-1'
          )}>
          <ServiceTile
            Icon={BuildIcon}
            title="Build"
            description="Create builds for your team and for the app stores."
          />
          <ServiceTile
            Icon={EasSubmitIcon}
            title="Submit"
            description="Submit apps to the App Store and Google Play store."
          />
          <ServiceTile
            Icon={LayersTwo02Icon}
            title="Update"
            description="Get the latest changes to your users in minutes, not days."
          />
          <ServiceTile
            Icon={PieChart03Icon}
            title="Insights"
            description="Learn how users use your app as you deploy."
          />
          <ServiceTile
            Icon={LineChartUp02Icon}
            title="On-demand"
            description="Pay for the services you use, as you grow."
          />
          <ServiceTile
            Icon={LifeBuoy01Icon}
            title="Support"
            description="Get unstuck with help from the Expo team."
          />
        </div>
      </div>
    </motion.section>
  );
}
