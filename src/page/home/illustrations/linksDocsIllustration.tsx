// import { theme } from '@expo/styleguide';

type Props = {
  className?: string;
};
const theme = {
  text: {
    default: '#ecedee',
  },
  icon: {
    quaternary: '#4c5155'
  }
}

export function LinksDocsIllustration({ className }: Props) {
  return (
    <svg
      width="38"
      height="29"
      viewBox="0 0 38 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}>
      <path
        d="M35.2997 28.1158H17.0503V5.41357H35.2997C36.2587 5.41357 37.0361 6.19097 37.0361 7.14994V26.3794C37.0361 27.3384 36.2587 28.1158 35.2997 28.1158Z"
        fill={theme.text.default}
      />
      <path
        d="M1.96566 28.1158H18.1238V5.41357H1.96566C1.00669 5.41357 0.229296 6.19097 0.229296 7.14994V26.3794C0.229296 27.3384 1.00669 28.1158 1.96566 28.1158Z"
        fill={theme.text.default}
      />
      <path
        d="M17.7134 5.0019V26.1359C14.7522 23.2061 4.00168 23.7112 4.00168 23.7112V0.34836C4.00168 0.34836 13.3913 -1.22351 17.7134 5.0019Z"
        fill={theme.icon.quaternary}
      />
      <path
        d="M19.5994 5.0019V26.1359C22.5606 23.2061 33.3111 23.7112 33.3111 23.7112V0.34836C33.3111 0.34836 23.9215 -1.22351 19.5994 5.0019Z"
        fill={theme.icon.quaternary}
      />
    </svg>
  );
}
