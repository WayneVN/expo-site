import mergeClasses from 'merge-class-names';

type Props = {
  content: string;
};

export function TweetContent({ content }: Props) {
  const mentionRegex = /@[a-z]*/gi;
  const mentions = content.match(mentionRegex) ?? [];
  const parts = content.split(new RegExp(`(${mentions.join('|')})`));

  return (
    <p className="text-default font-normal text-[16px] leading-[1.625] tracking-[-0.011rem] !whitespace-pre-line">
      {parts.map((part, index) => (
        <span className={mergeClasses(part.match(mentionRegex) && 'text-link')} key={part + index}>
          {part}
        </span>
      ))}
    </p>
  );
}
