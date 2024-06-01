import mergeClasses from 'merge-class-names';
import { BuildNumberIcon, DiscordIcon, Announcement03SolidIcon } from '@expo/styleguide-icons';

import { LinkTile } from './components';
import { LinksDocsIllustration } from './illustrations';


export function Links() {
  return (
    <section className="border-t border-default bg-subtle py-24">
      <div className="relative mx-auto w-full max-w-screen-xl-gutters px-6 !max-w-screen-lg-gutters">
        <h2 className="text-default text-[25px] font-semibold leading-[1.4] tracking-[-0.021rem] max-md-gutters:text-[22px] max-md-gutters:leading-[1.409] max-sm-gutters:text-[19px] max-sm-gutters:leading-[1.5263] mb-8 max-md-gutters:text-center">Want to learn more?</h2>
        <div
          className={mergeClasses(
            'grid grid-cols-4 gap-10',
            'max-lg-gutters:grid-cols-auto-min-2 max-lg-gutters:justify-center',
            'max-sm-gutters:grid-cols-auto-min-1'
          )}>
          <LinkTile
            href="https://docs.expo.dev"
            openInNewTab
            title="Read the docs"
            Icon={LinksDocsIllustration}
          />
          <LinkTile
            href="https://chat.expo.dev"
            openInNewTab
            title="Join the community"
            Icon={DiscordIcon}
          />
          <LinkTile href="/tools" title="Use our tools" Icon={BuildNumberIcon} />
          <LinkTile href="/blog" title="Read our blog" Icon={Announcement03SolidIcon} />
        </div>
      </div>
    </section>
  );
}
