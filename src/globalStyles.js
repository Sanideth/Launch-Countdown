import { createGlobalStyle } from "styled-components";
import backgroundStars from "./img/bg-stars.svg";

const GlobalStyle = createGlobalStyle`
    :root {
        --color-primary: hsl(237, 18%, 59%);
        --color-secondary: hsl(345, 95%, 68%);
        --color-secondary-desaturated: hsl(236, 21%, 26%);
        --color-secondary-dark: hsl(235, 16%, 14%);
        --color-secondary-very-dark: hsl(234, 17%, 12%);

    }
    *, *::after,*::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        font-size: 62.5%;
    }

    body {
        font-family: "Red Hat Text", sans-serif;
        font-size: 1.4rem;
        background-image: url(${backgroundStars});
        background-color: var(--color-secondary-dark);
    }

`;

export default GlobalStyle;
