import mergeClasses from 'merge-class-names';
import { ArrowRightIcon } from '@expo/styleguide-icons';

import { XPostBox } from './components';
//import tweets from '~/scenes/HomeScene/data/tweets.json';

const tweets = [{
  "name": "The Big Red Geek",
  "pictureUrl": "https://expo.dev/static/home/avatars/thebigredgeek.webp",
  "username": "thebigredgeek1",
  "content": "I think @expo is one of the most beautiful ****ing pieces of engineering I’ve seen in a very long time"
}, {
  "name": "The Big Red Geek",
  "pictureUrl": "https://expo.dev/static/home/avatars/thebigredgeek.webp",
  "username": "thebigredgeek2",
  "content": "I think @expo is one of the most beautiful ****ing pieces of engineering I’ve seen in a very long time"
}, {
  "name": "The Big Red Geek",
  "pictureUrl": "https://expo.dev/static/home/avatars/thebigredgeek.webp",
  "username": "thebigredgeek3",
  "content": "I think @expo is one of the most beautiful ****ing pieces of engineering I’ve seen in a very long time"
}, {
  "name": "The Big Red Geek",
  "pictureUrl": "https://expo.dev/static/home/avatars/thebigredgeek.webp",
  "username": "thebigredgeekf",
  "content": "I think @expo is one of the most beautiful ****ing pieces of engineering I’ve seen in a very long timeI think @expo is one of the most beautiful ****ing pieces of engineering I’ve seen in a very long time"
}, {
  "name": "The Big Red Geek",
  "pictureUrl": "https://expo.dev/static/home/avatars/thebigredgeek.webp",
  "username": "thebigredgeeks",
  "content": "I think @expo is one of the most beautiful ****ing pieces of engineering I’ve seen in a very long time"
}, {
  "name": "The Big Red Geek",
  "pictureUrl": "https://expo.dev/static/home/avatars/thebigredgeek.webp",
  "username": "thebigredgeekd",
  "content": "I think @expo is one of the most beautiful ****ing pieces of engineering I’ve seen in a very long time"
}, {
  "name": "The Big Red Geek",
  "pictureUrl": "https://expo.dev/static/home/avatars/thebigredgeek.webp",
  "username": "thebigredgeeke",
  "content": "I think @expo is one of the most beautiful ****ing pieces of engineering I’ve seen in a very long timeI think @expo is one of the most beautiful ****ing pieces of engineering I’ve seen in a very long timeI think @expo is one of the most beautiful ****ing pieces of engineering I’ve seen in a very long time"
}, {
  "name": "The Big Red Geek",
  "pictureUrl": "https://expo.dev/static/home/avatars/thebigredgeek.webp",
  "username": "thebigredgeekg",
  "content": "I think @expo is one of the most beautiful ****ing pieces of engineering I’ve seen in a very long timeI think @expo is one of the most beautiful ****ing pieces of engineering I’ve seen in a very long time"
}, {
  "name": "The Big Red Geekz",
  "pictureUrl": "https://expo.dev/static/home/avatars/thebigredgeek.webp",
  "username": "thebigredgeek",
  "content": "I think @expo is one of the most beautiful ****ing pieces of engineering I’ve seen in a very long time"
}, {
  "name": "The Big Red Geek11",
  "pictureUrl": "https://expo.dev/static/home/avatars/thebigredgeek.webp",
  "username": "thebigredgeek33",
  "content": "I think @expo is one of the most beautiful ****ing pieces of engineering I’ve seen in a very long time"
}, {
  "name": "The Big Red Geek",
  "pictureUrl": "https://expo.dev/static/home/avatars/thebigredgeek.webp",
  "username": "thebigredgeek44",
  "content": "I think @expo is one of the most beautiful ****ing pieces of engineering I’ve seen in a very long time"
}, {
  "name": "The Big Red Geek",
  "pictureUrl": "https://expo.dev/static/home/avatars/thebigredgeek.webp",
  "username": "thebigredgeek55",
  "content": "I think @expo is one of the most beautiful ****ing pieces of engineering I’ve seen in a very long time"
}]

const tweetBoxes = tweets.map((tweet) => <XPostBox key={tweet.username} tweet={tweet} />);

export function SignUp() {
  return (
    <section className="relative overflow-hidden bg-palette-blue3 pb-28">
      <div className="relative z-20 flex flex-col items-center gap-8">
        <div className="backface-hidden flex transform-gpu animate-slideLeft items-center gap-8 hocus:pause-animation">
          {tweetBoxes}
          {tweetBoxes}
        </div>
        <h2 className='tracking-[-0.021rem] text-[39px] leading-[1.3076] max-md-gutters:text-[34px] max-md-gutters:leading-[1.2941] max-sm-gutters:text-[29px] max-sm-gutters:leading-[1.3103] font-black mt-16 !text-center text-palette-blue12'>
          Upgrade your team’s workflow
          <br />
          and iterate with stability.
        </h2>
        <a
          className="inline-flex border border-solid font-medium gap-2 items-center whitespace-nowrap transition h-15 text-lg border-button-primary bg-button-primary text-button-primary shadow-xs hocus:bg-button-primary-hover active:scale-98 mb-4 rounded-lg px-8"
          href="/signup"
        >
          <span className='flex self-center text-inherit leading-none select-none'>Sign Up</span>
          <ArrowRightIcon />
        </a>
      </div>
      <img
        width="140vw"
        height="120%"
        src="https://expo.dev/static/home/signup-stripes.svg"
        className={mergeClasses(
          'absolute left-[-20vw] top-0 z-10 min-h-[120%] min-w-[140vw] opacity-60',
          'dark:opacity-[2.5%]',
          'max-xl-gutters:min-w-[160vw]',
          'max-lg-gutters:min-w-[180vw]',
          'max-md-gutters:min-w-[1600px]'
        )}
        alt="pattern"
      />
      <div className="absolute top-0 z-10 h-[158px] w-full bg-default" />
    </section>
  );
}
