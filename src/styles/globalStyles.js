import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

 *{
  margin:0;
  padding:0;
  box-sizing: border-box;
 }

 html{
  font-size:62.5%;
  scroll-behavior: smooth;
 }

 body{
  font-size: 1.6rem;
  font-family: 'Open Sans', sans-serif;
 }

 h1, h2, h3, h4, h5, h6{
  font-size: 2.4rem;
  font-family: 'Montserrat', sans-serif;
  margin:${({ theme }) => theme.spacings.large} 0;
 }

 p {
    margin: ${({ theme }) => theme.spacings.medium} 0;
  }
  ul, ol {
    margin: ${({ theme }) => theme.spacings.medium};
    padding: ${({ theme }) => theme.spacings.medium};
  }
  a {
    color: ${({ theme }) => theme.colors.secondaryColor};
  }
`;
