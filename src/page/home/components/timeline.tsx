import mergeClassNames from 'merge-class-names';
import { motion } from 'framer-motion';
import { ComponentType, HTMLAttributes, ReactElement, FC } from 'react';

import { TimelineEntry } from './timelineEntry';

type Props = {
  title: string;
  Icon: ComponentType<HTMLAttributes<SVGSVGElement>>;
  entries: TimelineEntryType[];
  theme?: 'blue' | 'orange' | 'green';
  footer?: TimelineEntryType;
  withFade?: boolean;
};

type TimelineEntryType = {
  title: string;
  description: string;
  content?: ReactElement;
  className?: string;
};

export const Timeline: FC<Props> = ({
  title,
  Icon,
  entries,
  footer,
  theme = 'blue',
  withFade = false,
}) => {
  const { text, border, background, indicatorBorder } = getThemeColors(theme);
  return (
    <div>
      <div className="flex justify-center">
        <div
          className={mergeClassNames(
            'relative flex size-56 items-center justify-center self-center',
            'max-lg-gutters:size-48'
          )}>
          <div
            className={mergeClassNames(
              'absolute inset-0 overflow-hidden rounded-full opacity-40',
              background
            )}
          />
          <motion.div
            className={mergeClassNames(
              'absolute inset-0 overflow-hidden rounded-full opacity-0',
              background
            )}
            whileInView="onscreen"
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 1 }}
            variants={{
              onscreen: {
                scale: [1, 1, 1.4],
                opacity: [0, 0.4, 0],
              },
            }}
          />
          <div
            className={mergeClassNames(
              'relative z-20 flex size-[168px] flex-col items-center justify-center overflow-hidden rounded-full',
              'max-lg-gutters:size-36',
              background
            )}>
            <div className="flex flex-col items-center">
              <Icon className={mergeClassNames('icon-xl relative z-10', text)} />
              <h2 className={mergeClassNames('text-[25px] font-semibold leading-[1.4] tracking-[-0.021rem] max-md-gutters:text-[22px] max-md-gutters:leading-[1.409] max-sm-gutters:text-[19px] max-sm-gutters:leading-[1.5263] relative z-10 text-palette-blue10 ', text)}>{title}</h2>
            </div>
          </div>
        </div>
      </div>
      <div
        className={mergeClassNames(
          'grid grid-cols-2 gap-x-40',
          'max-lg-gutters:mt-8 max-lg-gutters:grid-cols-auto-min-1 max-lg-gutters:gap-y-16 max-lg-gutters:pl-10'
        )}>
        {entries.map(({ className, ...data }, index) => (
          <TimelineEntry
            {...data}
            key={`${title.toLowerCase()}-${index}`}
            className={mergeClassNames(
              index % 2 ? 'prose-em:-left-24' : 'prose-em:-right-24',
              'prose-em:top-1',
              'max-lg-gutters:prose-em:-left-12',
              className
            )}
            indicatorBorder={indicatorBorder}
          />
        ))}
        <div
          className={mergeClassNames(
            'absolute bottom-0 left-[calc(50%-0.5px)] top-[196px] z-[1] w-[1px]',
            'max-lg-gutters:left-8 max-lg-gutters:top-[262px]',
            border
          )}
        />
      </div>
      {footer && (
        <div className="mt-24 flex flex-col max-lg-gutters:mt-16 max-lg-gutters:pl-10">
          <div className="w-[calc(50%-80px)] max-lg-gutters:w-full">
            <TimelineEntry
              title={footer.title}
              description={footer.description}
              className={mergeClassNames(
                'prose-em:-right-24 prose-em:top-1',
                'max-lg-gutters:prose-em:-left-12'
              )}
              indicatorBorder={indicatorBorder}
            />
          </div>
          {footer.content}
          <div
            className={mergeClassNames(
              'absolute bottom-0 left-[calc(50%-0.5px)] z-[1] w-[1px]',
              'max-lg-gutters:left-8 max-lg-gutters:top-[262px]',
              border
            )}
          />
        </div>
      )}
      <div
        className={mergeClassNames(
          'h-40',
          'max-lg-gutters:relative max-lg-gutters:z-10 max-lg-gutters:h-32 max-lg-gutters:bg-default-fade',
          withFade && 'relative z-10 bg-default-fade'
        )}
      />
    </div>
  );
}

function getThemeColors(theme: string) {
  switch (theme) {
    case 'orange':
      return {
        text: 'text-palette-orange10',
        border: 'bg-palette-orange7',
        indicatorBorder: 'border-palette-orange7',
        background: 'bg-palette-orange3',
      };
    case 'green':
      return {
        text: 'text-palette-green10',
        border: 'bg-palette-green7',
        indicatorBorder: 'border-palette-green7',
        background: 'bg-palette-green3',
      };
    case 'blue':
    default:
      return {
        text: 'text-palette-blue10',
        border: 'bg-palette-blue7',
        indicatorBorder: 'border-palette-blue7',
        background: 'bg-palette-blue3',
      };
  }
}
