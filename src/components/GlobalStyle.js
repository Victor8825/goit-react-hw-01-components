import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  .root {
    margin: ${ p => p.theme.space[0]}px;
    padding: ${ p => p.theme.space[0]}px;
  }

  body {
    font-family: ${p => p.theme.fonts.monospace};
    box-sizing: border-box;
    min-width: ${p => p.theme.space[0]}px;
    background-color: #DCE7EB;
  }

  ul {
    list-style: none;
  }`
