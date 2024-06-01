import { FC, ReactNode } from 'react'
import {
  Stars02Icon,
  ArrowRightIcon,
  ArrowUpRightIcon,
  TerminalBrowserIcon,
  StoplightIcon,
  Rocket01Icon,
  /* HeroDeployIllustration,
  HeroDevelopIllustration */
} from "@expo/styleguide-icons";


import { FramerCarousel } from '~/components';
import { Icon1, Icon3 } from './icons';


export const Hero = () => {

  return (
    <section className='select-none overflow-x-hidden pb-28 pt-32 max-lg-gutters:pb-16 max-lg-gutters:pt-12 max-md-gutters:pb-8'>
      <div className='relative mx-auto w-full max-w-screen-xl-gutters px-6 grid grid-cols-2 gap-2 max-lg-gutters:grid-cols-1 max-lg-gutters:gap-20'>
        <div>
          <a href="#" className='mb-8 inline-flex items-center rounded-full border border-palette-red6 bg-palette-red2 text-xs text-palette-red10 transition-colors duration-300 hocus:bg-palette-red3'>
            <div className='flex items-center gap-2 py-1 pl-4 pr-5'>
              <Stars02Icon className='icon-sm text-palette-red10' />
              Learn what’s new!
              <ArrowRightIcon className='icon-sm text-palette-red10' />
            </div>
          </a>

          <h1 className='text-default text-[31px] font-semibold leading-[1.29] tracking-[-0.022rem] max-md-gutters:text-[27px] max-md-gutters:leading-[1.3333] max-sm-gutters:text-[23px] max-sm-gutters:leading-[1.3913] mb-6 mt-2 select-text !text-[37px] !font-normal !leading-[59px] !tracking-tight max-xl-gutters:!text-[32px] max-xl-gutters:!leading-[51px] max-sm-gutters:!text-[28px] max-sm-gutters:!leading-[45px]'>
            <span className="relative top-[3px] max-sm-gutters:top-0">Expo and EAS are</span>
            <br />
            an ecosystem of tools that help you
            <br className='max-sm-gutters:hidden' />
            <span className='inline-block pb-1.5 px-2 rounded-md !leading-[1.37] max-sm-gutters:pb-1 bg-palette-blue3 text-palette-blue10 mr-2'>
              <TerminalBrowserIcon className='icon-md inline size-7 text-palette-blue10 max-sm-gutters:icon-lg mr-2' />
              develop
            </span>
            <span className='inline-block pb-1.5 px-2 rounded-md !leading-[1.37] max-sm-gutters:pb-1 bg-palette-orange3 text-palette-orange10'>
              <StoplightIcon className='icon-md inline size-7 text-palette-orange10 max-sm-gutters:icon-lg mr-2' />
              review
            </span>
            <span className="px-2">&amp;</span>
            <span className='inline-block pb-1.5 px-2 rounded-md !leading-[1.37] max-sm-gutters:pb-1 bg-palette-green3 text-palette-green10'>
              <Rocket01Icon className='icon-md inline size-7 text-palette-green10 max-sm-gutters:icon-lg mr-2' />
              deploy
            </span>
          </h1>
          <p className="font-normal text-[16px] leading-[1.625] tracking-[-0.011rem] text-secondary mb-14 max-w-[540px] select-text !text-lg max-lg-gutters:mr-0 max-md-gutters:mb-10">
            Create universal native apps with React that run on Android, iOS, and the web. Iterate with confidence.
          </p>
          <div className='flex gap-5 max-sm-gutters:flex-col'>
            <a href="#" className='inline-flex border-solid gap-2 items-center whitespace-nowrap transition h-15 px-6 text-lg border-button-primary shadow-xs active:scale-98 rounded-[12px] border-0 bg-palette-black font-semibold text-palette-white dark:bg-palette-white dark:text-palette-black hocus:bg-palette-black hocus:opacity-80 dark:hocus:bg-palette-white max-sm-gutters:justify-center'>
              <span className='flex self-center text-inherit leading-none select-none'>
                Sign Up for Free
              </span>
              <ArrowRightIcon className='icon-lg text-palette-white dark:text-palette-black' />
            </a>
            <a href="#" className='inline-flex border border-solid gap-2 items-center whitespace-nowrap transition h-15 px-6 text-lg border-button-secondary bg-button-secondary text-button-secondary shadow-xs hocus:bg-button-secondary-hover active:scale-98 rounded-[12px] font-semibold max-sm-gutters:justify-center'>
              <span className='flex self-center text-inherit leading-none select-none'>
                Read the Docs
              </span>
              <ArrowUpRightIcon />
            </a>
          </div>
        </div>


        <FramerCarousel
          data={[
            {
              content: (
                <>
                  <div className="absolute -top-10 flex h-[460px] w-[380px] max-w-[380px] rounded-3xl bg-palette-blue3" />
                  <Icon1 />
                </>
              ),
              activeColor: 'bg-palette-blue7',
            },
            {
              content: (
                <>
                  <div className="absolute -top-10 flex h-[460px] w-[380px] max-w-[380px] rounded-3xl bg-palette-orange3" />
                  <picture className='pointer-events-none absolute left-[5%] top-[10%] max-w-[440px] cursor-grab max-xl-gutters:max-w-[420px]'>
                    <img
                      className="hidden dark:block"
                      src="https://expo.dev/static/home/review-github-dark.png"
                      alt="Expo workflow"
                      width={1046}
                      height={689}
                      loading="lazy"
                    />
                    <img
                      className="dark:hidden"
                      src="https://expo.dev/static/home/review-github.png"
                      alt="Expo workflow"
                      width={1046}
                      height={689}
                      loading="lazy"
                    />
                  </picture>
                  <img
                    className="pointer-events-none absolute right-[12.5%] top-[-4%] z-10 max-h-[420px] cursor-grab asset-shadow"
                    src="https://expo.dev/static/home/hero-review.webp"
                    alt="Review"
                  />
                </>
              ),
              activeColor: 'bg-palette-orange7',
            },
            {
              content: (
                <>
                  <div className="absolute -top-10 flex h-[460px] w-[380px] max-w-[380px] rounded-3xl bg-palette-green3" />
                  <Icon3 />
                </>
              ),
              activeColor: 'bg-palette-green7',
            },
          ]}
        />

      </div>
    </section>
  )
}


