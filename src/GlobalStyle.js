import { createGlobalStyle } from 'styled-components';
import cliffs from './img/cliffs.svg';

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(
      rgba(255, 255, 255, 0.6),
      rgba(255, 255, 255, 0.6)
    ),
    url(${cliffs});
    background-size: cover;
    background-repeat: no-repeat;
}

`;

export default GlobalStyle;
