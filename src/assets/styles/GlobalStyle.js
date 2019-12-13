import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
    box-sizing: border-box;
}
html {
    font-size: 62.5%;

    /* now 1rem === 10px */
}
body {
    padding: 0;
    margin: 0;
    min-height: 100vh;
    font-size: 1.6rem;
    font-family: 'Montserrat', sans-serif;
    color: ${({ theme }) => theme.blue};
     ${({ theme }) => theme.mq.desktop} {
         padding-left: 175px;
     }
}
`;

export default GlobalStyle;
