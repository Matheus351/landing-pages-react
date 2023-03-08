import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,900;1,900&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Roboto:wght@400;700&display=swap');
 *{
  margin:0;
  padding:0;
 }

 html{
  font-size:62.5%;
 }

 body{
  font-size: 1.6rem;
  font-family: 'Open Sans', sans-serif;
 }

 h1{
  font-size: 2.4rem;
  font-family: 'Montserrat', sans-serif;
 }
`;
