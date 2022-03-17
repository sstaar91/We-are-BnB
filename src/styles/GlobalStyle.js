import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  *{
    box-sizing: border-box
  }

  body{
    font-family: 'Fredoka Regular'
  }
`;

export default GlobalStyle;
