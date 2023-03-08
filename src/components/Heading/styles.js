import styled, { css } from 'styled-components';
// import {theme} from '../../styles/theme';

const titleSize = {
  small: (theme) =>
    css`
      font-size: ${theme.sizes.small};
    `,
  medium: (theme) =>
    css`
      font-size: ${theme.sizes.medium};
    `,
  big: (theme) =>
    css`
      font-size: ${theme.sizes.xlarge};
    `,
  huge: (theme) =>
    css`
      font-size: ${theme.sizes.xhuge};
      ${mediaFont(theme)};
    `,
};

const mediaFont = (theme) => css`
  @media ${theme.media.lteMedium} {
    font-size: ${theme.sizes.xlarge};
  }
`;

const titleCase = (uppercase) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

export const Title = styled.h1`
  ${({ theme, colorDark, size, uppercase }) => css`
    color: ${colorDark ? theme.colors.white : theme.colors.primaryColor};
    ${titleSize[size](theme)}
    ${titleCase(uppercase)}
  `}
`;
