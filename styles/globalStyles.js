import { createGlobalStyle} from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    font-family: Roboto, Arial, Helvetica, Sans-Serif;
  }

  *{
      box-sizing:border-box;
      margin:0;
      padding:0;
      outline:none;
  }
`;
 


export default GlobalStyle;