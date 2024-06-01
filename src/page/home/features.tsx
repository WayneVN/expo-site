import { ArrowUpRightIcon } from '@expo/styleguide-icons';
import { PropsWithChildren } from 'react';


function FeatureToken({ children }: PropsWithChildren) {
  return (
    <span className="transition-colors duration-[250ms] hocus:text-transparent">{children}</span>
  );
}

export function Features() {
  return (
    <section className="dark-theme bg-[#1A1D1E] py-24">
      <div className="relative mx-auto w-full max-w-screen-xl-gutters px-6 !max-w-[600px]">
        <h2 className="text-default text-[31px] font-semibold leading-[1.29] tracking-[-0.022rem] max-md-gutters:text-[27px] max-md-gutters:leading-[1.3333] max-sm-gutters:text-[23px] max-sm-gutters:leading-[1.3913] text-center">
          And you’ll get so much more…
        </h2>
        <div className="my-14 flex cursor-default flex-col gap-8 bg-statement-gradient bg-clip-text">
          <h3 className='text-default text-[20px] font-semibold leading-[1.5] tracking-[-0.017rem] max-md-gutters:text-[18px] max-md-gutters:leading-[1.5555] max-sm-gutters:text-[16px] max-sm-gutters:leading-[1.625]'>
            <FeatureToken>Organization accounts.</FeatureToken>{' '}
            <FeatureToken>Production-like development server.</FeatureToken>{' '}
            <FeatureToken>Developer tools built in.</FeatureToken>{' '}
            <FeatureToken>Automatic native code configuration.</FeatureToken>{' '}
            <FeatureToken>Use any native code.</FeatureToken>{' '}
            <FeatureToken>Simulator builds.</FeatureToken>{' '}
            <FeatureToken>File-based routing.</FeatureToken>{' '}
            <FeatureToken>Automatic build submissions.</FeatureToken>{' '}
            <FeatureToken>App store metadata verification.</FeatureToken>{' '}
            <FeatureToken>Usage-based pricing.</FeatureToken>{' '}
            <FeatureToken>Team credential management.</FeatureToken>
          </h3>
          <p className='text-default text-[16px] leading-[1.625] tracking-[-0.011rem] font-medium'>
            <FeatureToken>Preview updates with a QR code.</FeatureToken>{' '}
            <FeatureToken>Save app store metadata.</FeatureToken>{' '}
            <FeatureToken>Automatic app store credentials management.</FeatureToken>{' '}
            <FeatureToken>Ad-hoc builds.</FeatureToken>{' '}
            <FeatureToken>End-to-end code signing.</FeatureToken>{' '}
            <FeatureToken>Build logs.</FeatureToken> <FeatureToken>Member roles.</FeatureToken>{' '}
            <FeatureToken>Web dashboards.</FeatureToken>{' '}
            <FeatureToken>Submission logs.</FeatureToken>{' '}
            <FeatureToken>Top-notch universal modules.</FeatureToken>{' '}
            <FeatureToken>Expo Discord community.</FeatureToken>{' '}
            <FeatureToken>End-to-end testing.</FeatureToken>
          </p>
          <p className='text-[14px] leading-[1.5715] tracking-[-0.006rem] font-medium text-secondary'>
            <FeatureToken>Regular SDK releases.</FeatureToken>{' '}
            <FeatureToken>Apple silicon builders for iOS.</FeatureToken>{' '}
            <FeatureToken>Automatic version incrementing in CI.</FeatureToken>{' '}
            <FeatureToken>GitHub Actions-ready.</FeatureToken>{' '}
            <FeatureToken>Shareable Snack playgrounds.</FeatureToken>{' '}
            <FeatureToken>VS Code extension.</FeatureToken>{' '}
          </p>
        </div>
        <div className="text-center">
          <a
            className="inline-flex border border-solid rounded-md font-medium gap-2 items-center whitespace-nowrap transition h-11 px-6 text-base shadow-xs active:scale-98 dark-theme border-palette-white bg-palette-white text-palette-black hocus:bg-palette-gray12"
            href="https://docs.expo.dev"
          >
            Get Started
            <ArrowUpRightIcon className="text-icon-default" />
          </a>
        </div>
      </div>
    </section>
  );
}
