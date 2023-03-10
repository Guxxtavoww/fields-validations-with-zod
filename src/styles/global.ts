import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    outline: 0;
    border: none;
    scroll-behavior: smooth;
    font-family: 'Poppins', sans-serif !important;
  }

  body {
    max-width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;
  }

  img {
    display: block;
    max-width: 100%;
  }

  button {
    cursor: pointer;
  }

  input:disabled {
    opacity: 0.4 !important;
    cursor: not-allowed !important;
  }

  .error {
    color: #e12325; 
    font-weight: 600;
    font-size: 12px;
  }
`;

export default GlobalStyles;
