import { ArrowRightIcon, ArrowUpRightIcon } from '@expo/styleguide-icons';
import { PerspectiveHover } from '~/ui';

type Props = any;

export function LinkTile({ href, openInNewTab, title, Icon }: Props) {
  const ArrowIcon = openInNewTab ? ArrowUpRightIcon : ArrowRightIcon;
  return (
    <PerspectiveHover perspective={650} speed={1200} scale={1.025}>
      <a href={href} >
        <div className="rounded-md border border-secondary bg-default shadow-xs flex w-56 flex-col items-center overflow-hidden">
          <Icon className="icon-2xl m-8 text-default" />
          <div className="flex w-full items-center border-t border-t-default bg-subtle px-4 py-2 text-secondary">
            {title}
            <ArrowIcon className="ml-auto" />
          </div>
        </div>
      </a>
    </PerspectiveHover>
  );
}
