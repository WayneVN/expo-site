import { DiscordIcon, GithubIcon, XLogoIcon } from '@expo/styleguide-icons';

const socialLinks = [
  {
    href: 'https://www.github.com/expo/expo',
    title: 'GitHub',
    Icon: GithubIcon,
  },
  {
    href: 'https://www.twitter.com/expo',
    title: 'X',
    Icon: XLogoIcon,
  },
  {
    href: 'https://chat.expo.dev',
    title: 'Discord',
    Icon: DiscordIcon,
  },
];

export function SocialLinks() {
  return (
    <div className="flex items-center">
      <a href="/">

        <svg
          viewBox="0 0 71 20"
          fill="none"
          role="img"
          className="text-icon-default icon-lg min-w-[84px]"
        >
          <path d="M9.258 6.342c.158-.23.331-.26.472-.26.14 0 .374.03.532.26 2.06 2.806 6.332 10.208 6.727 10.611.585.597 1.388.225 1.854-.452.46-.667.587-1.135.587-1.634 0-.34-6.653-12.614-7.324-13.636C11.462.248 11.252 0 10.15 0h-.825c-1.1 0-1.259.248-1.903 1.23C6.75 2.254.097 14.528.097 14.868c0 .5.127.967.587 1.634.466.677 1.269 1.05 1.854.452.395-.403 4.661-7.805 6.72-10.61zm14.941-5.237v15.344h9.35v-3.113h-6.125v-3.244h5.45V6.98h-5.45V4.218h6.125V1.105h-9.35zM46.25 16.449l-3.88-5.568 3.619-5.195h-3.662L40.54 8.23l-1.765-2.543h-3.706l3.618 5.217-3.857 5.546h3.661l2.027-2.915 2.027 2.915h3.705zm7.572-10.982c-1.482 0-2.637.614-3.378 1.732V5.686H47.37V20h3.073v-5.063c.74 1.117 1.896 1.731 3.378 1.731 2.768 0 4.97-2.52 4.97-5.611 0-3.091-2.202-5.59-4.97-5.59zm-.697 8.242c-1.504 0-2.681-1.14-2.681-2.652 0-1.49 1.177-2.653 2.68-2.653 1.483 0 2.681 1.184 2.681 2.653 0 1.49-1.198 2.652-2.68 2.652zm12.188-8.242c-3.16 0-5.558 2.411-5.558 5.612 0 3.2 2.397 5.59 5.557 5.59 3.139 0 5.558-2.39 5.558-5.59 0-3.2-2.42-5.612-5.558-5.612zm0 2.96c1.438 0 2.55 1.117 2.55 2.652 0 1.49-1.112 2.63-2.55 2.63-1.46 0-2.55-1.14-2.55-2.63 0-1.535 1.09-2.653 2.55-2.653z" fill="currentColor">
          </path>
        </svg>
      </a>
      <div className="ml-4 mr-2 h-7 w-px bg-palette-gray5" />
      <div className="flex gap-0.5">
        {socialLinks.map(({ Icon, title, href }) => (
          <a
            className="inline-flex border border-solid rounded-md font-medium gap-2 items-center whitespace-nowrap transition h-8 text-3xs border-button-quaternary bg-button-quaternary text-button-quaternary shadow-none hocus:bg-button-quaternary-hover active:scale-98 px-1.5"
            href={href}
            key={`social-button-${title}`}
          >
            <Icon title={title} />
          </a>
        ))}
      </div>
    </div>
  );
}
