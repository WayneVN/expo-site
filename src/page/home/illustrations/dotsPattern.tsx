import { HTMLAttributes } from 'react';

type Props = HTMLAttributes<SVGSVGElement> & {
  name: string;
};

export function DotsPattern({ className, name }: Props) {
  return (
    <svg
      className={`absolute inset-0 ${className}`}
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern
          id={name}
          patternUnits="userSpaceOnUse"
          width="60"
          height="60"
          patternTransform="scale(0.4) rotate(0)">
          <rect x="0" y="0" width="100%" height="100%" fill="transparent" />
          <path
            d="M 4.95 2.7 a 2.25 2.25 90 0 1 -2.25 2.25 a 2.25 2.25 90 0 1 -2.25 -2.25 a 2.25 2.25 90 0 1 2.25 -2.25 a 2.25 2.25 90 0 1 2.25 2.25"
            strokeWidth="1"
            stroke="none"
            fill="inherit"
          />
        </pattern>
      </defs>
      <rect width="800%" height="400%" transform="translate(15,20)" fill={`url(#${name})`} />
    </svg>
  );
}
