import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --color-primary: hsl(237, 18%, 59%);
        --color-secondary: hsl(345, 95%, 68%);
        --color-secondary-desaturated: hsl(236, 21%, 26%);
        --color-secondary-dark: hsl(235, 16%, 14%);
        --color-secondary-very-dark: hsl(234, 17%, 12%);

    }
    html {
        font-size: 62.5%;
    }

    body {
        font-family: "Red Hat Text", sans-serif;
        font-size: 1.4rem;
    }

`;

export default GlobalStyle;
