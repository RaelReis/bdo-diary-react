import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: none;
    border: none;
    background: none;
  }

  body,
  html {
    background-color: #1a1a2c;
    color: #fff;
    font-family: 'Poppins', sans-serif;
  }

  .App {
    width: 100%;
    height: 100vh;
  }
  
`;
