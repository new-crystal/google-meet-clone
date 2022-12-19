import {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
}

body {
    box-sizing: border-box;
}

button {
    background-color: transparent;
    outline: none;
    border: 0px;
    cursor: pointer;
}
`