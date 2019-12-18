import { css } from 'styled-components';

export const theme = {
  blue: '#05214A',
  yellow: '#F0C220',
  gray: '#E3E4E6',
  medium: 500,
  semiBold: 600,
  bold: 700,
  fontSize: {
    xxs: '1rem',
    xs: '1.2rem',
    s: '1.6rem',
    m: '2.2rem',
    l: '2.8rem',
    xl: '4rem',
    xxl: '6rem',
    xxxl: '8.5rem',
  },
  mq: {
    tablet: '@media (min-width: 768px)',
    desktop: '@media (min-width: 1040px)',
    huge: '@media (min-width: 1340px)',
  },
  textHover: color =>
    css`
      :hover {
        color: ${color};
        transition: color 0.3s ease-out;
        cursor: pointer;
      }
    `,
};
