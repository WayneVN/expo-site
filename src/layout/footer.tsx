import { useState, useCallback } from "react";
import { ChevronDownIcon, ArrowUpRightIcon } from "@expo/styleguide-icons";
import { clone } from 'ramda'
import { SocialLinks } from '~/ui'
import mergeClasses from 'merge-class-names';

type Item = {
  label: string;
  isOpen: boolean;
  list: Array<{
    name: string;
    icon?: boolean
  }>
}

type LINKS_TYPE = Array<Item>


const LINKS: LINKS_TYPE = [{
  label: 'Product',
  isOpen: true,
  list: [{
    name: 'Expo on GitHub',
    icon: true
  }, {
    name: 'Expo CLI on GitHub',
    icon: true
  }, {
    name: 'EAS',
  }, {
    name: 'EAS CLI on GitHub',
    icon: true
  }, {
    name: 'Snack',
    icon: true
  }, {
    name: 'Expo Go',
  }, {
    name: 'Expo Orbit',
  }, {
    name: 'Star Us on GitHub',
    icon: true
  }]
}, {
  label: 'Resources',
  isOpen: true,
  list: [{
    name: 'Expo on GitHub',
    icon: true
  }, {
    name: 'Expo on GitHub',
    icon: true
  }, {
    name: 'Expo on GitHub',
    icon: true
  }, {
    name: 'Expo on GitHub',
    icon: true
  }]
}, {
  label: 'Company',
  isOpen: true,
  list: [{
    name: 'Expo on GitHub',
    icon: true
  }, {
    name: 'Expo on GitHub',
    icon: true
  }, {
    name: 'Expo on GitHub',
    icon: true
  }, {
    name: 'Expo on GitHub',
    icon: true
  }]
}, {
  label: 'Legal',
  isOpen: true,
  list: [{
    name: 'Expo on GitHub',
    icon: true
  }, {
    name: 'Expo on GitHub',
    icon: true
  }, {
    name: 'Expo on GitHub',
    icon: true
  }, {
    name: 'Expo on GitHub',
    icon: true
  }]
}]

export const Footer = () => {
  const [LinksMap, setLinksMap] = useState<LINKS_TYPE>(LINKS);

  const handleTrigger = useCallback((index: number) => {
    let _LinksMap = clone(LinksMap)
    _LinksMap[index].isOpen = !_LinksMap[index].isOpen
    console.log(_LinksMap, '_LinksMap_LinksMap');

    setLinksMap(_LinksMap)
  }, [LinksMap, setLinksMap])

  return (
    <footer className="border-t border-t-default bg-default">
      <div className="relative mx-auto w-full max-w-screen-xl-gutters px-6 pb-20 pt-16 max-md-gutters:pb-10 max-md-gutters:pt-8">

        <nav className="grid grid-cols-4 gap-8 max-md-gutters:grid-cols-1 max-md-gutters:gap-0">
          {
            LinksMap.map((item: Item, key: number) => (
              <div key={key} className="pt-[15px]">
                <label
                  className="pointer-events-none flex items-center justify-between rounded-md px-3.5 py-2 max-md-gutters:pointer-events-auto max-md-gutters:cursor-pointer max-md-gutters:border max-md-gutters:border-secondary max-md-gutters:px-3.5 max-md-gutters:hocus:bg-subtle"
                  onClick={() => { handleTrigger(key) }}
                >
                  <span className="text-default font-medium">{item.label}</span>
                  <ChevronDownIcon
                    className={`icon-md hidden text-icon-secondary transition-transform duration-300 max-md-gutters:block ${item.isOpen ? ' rotate-180' : ''}`}
                  />
                </label>

                <ul className={`list-none max-md-gutters:mt-2 ${item.isOpen ? 'max-md-gutters:hidden' : ''}`}>
                  {
                    item.list.map((o, k: number) => (
                      <li key={k}>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-link hocus:opacity-80 block rounded-md px-3.5 py-2 transition-colors hocus:bg-subtle"
                          href="https://www.github.com/expo/expo">
                          <p className="font-normal text-[16px] leading-[1.625] tracking-[-0.011rem] text-secondary inline-flex items-center gap-1">
                            {o.name}
                            {
                              o.icon ? <ArrowUpRightIcon className="icon-sm text-icon-secondary" /> : null
                            }
                          </p>
                        </a>
                      </li>
                    ))
                  }
                </ul>
              </div>
            ))
          }

        </nav>
        <section
          className={mergeClasses(
            'mt-20 flex items-center justify-between gap-6',
            'max-md-gutters:mt-8 max-md-gutters:flex-wrap-reverse'
          )}>
          <div className="flex flex-col gap-4">
            <SocialLinks />
            <p className="font-normal text-[14px] leading-[1.5715] tracking-[-0.006rem] text-secondary">
              Copyright &copy; {new Date().getUTCFullYear()} 650 Industries, Inc. All rights
              reserved.
            </p>
          </div>
          <div
            className={mergeClasses(
              'flex flex-1 items-center justify-end gap-4',
              'max-md-gutters:justify-between',
              'max-sm-gutters:flex-col'
            )}>
            {/* <ServiceStatusIndicator />
            <ThemeSelector /> */}
          </div>
        </section>
      </div>
    </footer >
  );
};
