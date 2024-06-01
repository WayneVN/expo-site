//import { Button } from '@expo/styleguide';
import { ComponentType, HTMLAttributes, FC } from 'react';

type Props = {
  name: string;
  imageUrl: string;
  href: string;
  Icon: ComponentType<HTMLAttributes<SVGSVGElement>>;
};

export const DevelopAPITile: FC<Props> = ({ href, name, imageUrl, Icon }) => {
  return (
    <div className="flex min-w-[250px] flex-col justify-between gap-5">
      <img
        src={imageUrl}
        alt={`${name} API showcase`}
        className="pointer-events-none select-none asset-shadow"
        loading="lazy"
        width="100%"
        height="100%"
      />
      <a
        href={href}
        className=" inline-flex border border-solid rounded-md font-medium gap-2 items-center whitespace-nowrap transition h-9 px-4 text-xs bg-button-secondary shadow-xs hocus:bg-button-secondary-hover active:scale-98 mx-10 mt-3 justify-center border-secondary text-secondary "
      // leftSlot={<Icon className="text-icon-tertiary" />}
      >
        {name}
      </a >
    </div>
  );
}
