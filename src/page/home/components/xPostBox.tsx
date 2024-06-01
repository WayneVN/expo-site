import { XLogoIcon } from '@expo/styleguide-icons';

import { TweetContent } from './tweetContent';

type Props = {
  tweet: {
    name: string;
    pictureUrl: string;
    username: string;
    content: string;
  };
};

export function XPostBox({ tweet }: Props) {
  return (
    <div key={tweet.username} className='rounded-md border border-secondary bg-default shadow-xs w-[370px]'>
      <div className='px-6 py-5'>
        <div className="flex gap-2 pb-4">
          <img
            src={tweet.pictureUrl}
            height={44}
            width={44}
            loading="lazy"
            alt={`${tweet.name}'s avatar`}
            className="rounded-full"
          />
          <div>
            <p className='text-default font-normal text-[16px] leading-[1.625] tracking-[-0.011rem] font-semiBold'>{tweet.name}</p>
            <p className='font-normal text-[14px] tracking-[-0.006rem] text-secondary !leading-tight'>
              @{tweet.username}
            </p>
          </div>
          <XLogoIcon className="ml-auto min-w-[24px] text-palette-black dark:text-palette-white" />
        </div>
        <TweetContent content={tweet.content} />
      </div>
    </div>
  );
}
