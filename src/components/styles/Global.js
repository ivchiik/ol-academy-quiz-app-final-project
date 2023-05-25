import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  body {  
  background: #252525;
  font-size: 1.15em;
  font-family: Arial, Helvetica, sans-serif;
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  }

  h1{
    font-size: 3em;
  }

  h4{
    margin-bottom: 2em;
  }
`;

export default GlobalStyles;
