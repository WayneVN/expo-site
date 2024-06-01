import mergeClasses from 'merge-class-names';
import {
  Camera02Icon,
  Compass03Icon,
  Image01Icon,
  Map01Icon,
  TerminalBrowserDuotoneIcon,
} from '@expo/styleguide-icons';

import { FramerHorizontalScroll, DevelopAPITile, Timeline } from './components';

// import Content from '~/ui/patterns/layouts/Content';

export function Develop() {
  return (
    <section className="pt-20">
      <div className='relative mx-auto w-full max-w-screen-xl-gutters px-6'>
        <Timeline
          title="Develop"
          Icon={TerminalBrowserDuotoneIcon}
          entries={[
            {
              title: 'Get started',
              description: 'Initialize a new project or bring an existing React Native project.',
              content: (
                <img
                  src="https://expo.dev/static/home/cli-terminal.png"
                  alt="Expo CLI"
                  className="pointer-events-none select-none asset-shadow"
                  loading="lazy"
                  width={1029}
                  height={313}
                />
              ),
              className: 'mt-12',
            },
            {
              title: 'File-based routing, TypeScript ready',
              description:
                'Create stack and modal screens with minimal boilerplate using your filesystem. Feel confident with TypeScript.',
              content: (
                <img
                  src="https://expo.dev/static/home/editor-router.png"
                  alt="File-based routing"
                  className="pointer-events-none !w-full select-none asset-shadow"
                  loading="lazy"
                  width={1047}
                  height={823}
                />
              ),
              className: 'mt-48',
            },
            {
              title: 'Get going, then keep going with fast refresh',
              description:
                'Run your project on your own device with Expo Go. See your app update in milliseconds as you make changes.',
              content: (
                <picture>
                  <img
                    className="hidden w-full max-w-[522px] cursor-default select-none asset-shadow dark:block"
                    src="https://expo.dev/static/home/hello-world-dark.png"
                    alt="Expo workflow"
                    width={1010}
                    height={643}
                    loading="lazy"
                  />
                  <img
                    className="w-full max-w-[522px] cursor-default select-none asset-shadow dark:hidden"
                    src="https://expo.dev/static/home/hello-world.png"
                    alt="Expo workflow"
                    width={1010}
                    height={643}
                    loading="lazy"
                  />
                </picture>
              ),
              className: '-mt-80 max-lg-gutters:-mt-64',
            },
          ]}
          footer={{
            title: 'Use any library, SDK, or write your own native code',
            description:
              'You’ll never be limited by Expo. Write native code. Access every device API. Write anything, then run it everywhere.',
            content: (
              <FramerHorizontalScroll
                className={mergeClasses(
                  'mx-[-7.5%] -mb-4 gap-16 pb-8 pt-4',
                  'max-xl-gutters:-mx-6 max-xl-gutters:overflow-x-auto max-xl-gutters:px-6',
                  'max-md-gutters:-ml-16 max-md-gutters:pl-16'
                )}
                trackClassName={mergeClasses(
                  '-bottom-4',
                  'max-xl-gutters:inset-x-[33vw] max-xl-gutters:opacity-100',
                  'max-md-gutters:inset-x-16'
                )}>
                <DevelopAPITile
                  name="Maps"
                  href="https://docs.expo.dev/versions/latest/sdk/map-view/"
                  imageUrl="https://expo.dev/static/home/api-maps.webp"
                  Icon={Map01Icon}
                />
                <DevelopAPITile
                  name="Camera"
                  href="https://docs.expo.dev/versions/latest/sdk/camera/"
                  imageUrl="https://expo.dev/static/home/api-camera.webp"
                  Icon={Camera02Icon}
                />
                <DevelopAPITile
                  name="Image"
                  href="https://docs.expo.dev/versions/latest/sdk/image/"
                  imageUrl="https://expo.dev/static/home/api-image.webp"
                  Icon={Image01Icon}
                />
                <DevelopAPITile
                  name="Navigation"
                  href="https://docs.expo.dev/routing/introduction/"
                  imageUrl="https://expo.dev/static/home/api-navigation.webp"
                  Icon={Compass03Icon}
                />
              </FramerHorizontalScroll>
            ),
          }}
        />
      </div>
    </section>
  );
}
