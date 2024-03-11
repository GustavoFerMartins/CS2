import { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'RadionA';
    src: url(/fonts/RadionA.woff2);
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'TT-Norms';
    src: url(/fonts/TT-Norms.woff2);
    font-weight: bold;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    vertical-align: baseline;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

`
export default GlobalStyle