import { Rocket01DuotoneIcon } from '@expo/styleguide-icons';

import { Timeline } from './components';
import { DeployGraphIllustration } from './illustrations';


export const Deploy = () => {
  return (
    <section className="pb-4">
      <div className='relative mx-auto w-full max-w-screen-xl-gutters px-6'>
        <Timeline
          title="Deploy"
          Icon={Rocket01DuotoneIcon}
          theme="green"
          entries={[
            {
              title: 'Create and submit app store-ready builds',
              description:
                'Kick off a build. Then we’ll submit it to the App Store and Play Store automatically if you like.',
              content: (
                <picture>
                  <img
                    className="hidden w-full max-w-[516px] cursor-default select-none asset-sm-shadow dark:block"
                    src="https://expo.dev/static/home/deploy-builds-dark.png"
                    alt="Expo Dashboard"
                    width={516}
                    height={244}
                    loading="lazy"
                  />
                  <img
                    className="w-full max-w-[516px] cursor-default select-none asset-sm-shadow dark:hidden"
                    src="https://expo.dev/static/home/deploy-builds.png"
                    alt="Expo Dashboard"
                    width={516}
                    height={244}
                    loading="lazy"
                  />
                </picture>
              ),
              className: 'mt-12',
            },
            {
              title: 'Publish bug fixes in minutes',
              description:
                'Found a typo on your home screen? Don’t sweat: fix it, then publish an update that your users will receive the next time they launch your app. ',
              content: (
                <img
                  src="https://expo.dev/static/home/deploy-update.webp"
                  width={1029}
                  height={377}
                  alt="GitHub bot"
                  className="pointer-events-none select-none asset-shadow"
                  loading="lazy"
                />
              ),
              className: 'mt-40',
            },
            {
              title: 'Dashboards to keep your team on track',
              description:
                'We keep track of all of your builds, submissions, and deployments, organized on web dashboards for your whole team.',
              content: (
                <picture>
                  <img
                    className="hidden w-full max-w-[516px] cursor-default select-none asset-sm-shadow dark:block"
                    src="https://expo.dev/static/home/deploy-dashboard-dark.webp"
                    alt="Expo Dashboard"
                    width={1034}
                    height={614}
                    loading="lazy"
                  />
                  <img
                    className="w-full max-w-[516px] cursor-default select-none asset-sm-shadow dark:hidden"
                    src="https://expo.dev/static/home/deploy-dashboard.webp"
                    alt="Expo Dashboard"
                    width={1034}
                    height={614}
                    loading="lazy"
                  />
                </picture>
              ),
              className: 'mt-16 max-lg-gutters:mt-8',
            },
            {
              title: 'Iterate with confidence',
              description:
                'With flexible deployment patterns and the ability to rollback in seconds, you can iterate faster than ever before.',
              content: <DeployGraphIllustration />,
              className: 'mt-48 max-lg-gutters:mt-36',
            },
          ]}
          withFade
        />
      </div>
    </section>
  );
}
