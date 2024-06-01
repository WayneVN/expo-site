import { StoplightDuotoneIcon } from '@expo/styleguide-icons';

// import { ReviewTeamIllustration } from '~/scenes/HomeScene/illustrations/ReviewTeamIllustration';

import { Timeline } from './components';

export function Review() {
  return (
    <section>
      <div className='relative mx-auto w-full max-w-screen-xl-gutters px-6'>
        <Timeline
          title="Review"
          Icon={StoplightDuotoneIcon}
          theme="orange"
          entries={[
            {
              title: 'Invite your team',
              description:
                'With adjustable roles, your whole team can contribute, test, and view the state of your deployments.',
              content: (
                <svg viewBox="0 0 515 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-2 inline-block w-full max-w-[522px]">
                  <rect y="14" width="515" height="131" rx="12" className="fill-palette-orange3"></rect>
                  <image href="https://expo.dev/static/home/review-team-avatars.webp" x="164" width="184" height="160" />
                </svg>
              ),
              className: 'mt-12',
            },
            {
              title: 'Upgrade your PR reviews',
              description:
                'Commit, push to GitHub, and generate a QR code. That’s all that’s needed to let your team review a feature before merging.',
              content: (
                <picture>
                  <img
                    className="hidden w-full max-w-[522px] cursor-default select-none asset-sm-shadow dark:block"
                    src="https://expo.dev/static/home/review-github-dark.png"
                    alt="Expo workflow"
                    width={1046}
                    height={689}
                    loading="lazy"
                  />
                  <img
                    className="w-full max-w-[522px] cursor-default select-none asset-sm-shadow dark:hidden"
                    src="/static/home/review-github.png"
                    alt="Expo workflow"
                    width={1046}
                    height={689}
                    loading="lazy"
                  />
                </picture>
              ),
              className: 'mt-44',
            },
            {
              title: 'Run end-to-end tests',
              description: 'Use Detox to run automated end-to-end tests on EAS.',
              content: (
                <img
                  src="https://expo.dev/static/home/review-e2e.webp"
                  alt="Fast refresh"
                  width={1029}
                  height={377}
                  className="pointer-events-none select-none asset-shadow"
                  loading="lazy"
                />
              ),
              className: '-mt-48 max-lg-gutters:-mt-32',
            },
          ]}
        />
      </div>
    </section>
  );
}
