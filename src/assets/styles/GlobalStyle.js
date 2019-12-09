import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,700&display=swap');
*, *::before, *::after {
    box-sizing: border-box;
}
html {
    font-size: 62.5%;

    /* now 1rem === 10px */
}
body {
    padding-left: 175px;
    min-height: 100vh;
    font-size: 1.6rem;
    font-family: 'Montserrat', sans-serif;
    color: ${({ theme }) => theme.blue};
        margin: 0;

}
`;

export default GlobalStyle;
