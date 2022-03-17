import { createGlobalStyle } from 'styled-components';
import FredokaBold from './fonts/Fredoka-Bold.ttf';
import FredokaSemiBold from './fonts/Fredoka-SemiBold.ttf';
import FredokaMedium from './fonts/Fredoka-Medium.ttf';
import FredokaRegular from './fonts/Fredoka-Regular.ttf';
import FredokaLight from './fonts/Fredoka-Light.ttf';

export default createGlobalStyle`
  @font-face { 
    font-family: 'Fredoka Bold'; //700
    src: url(${FredokaBold}) format('truetype');
  }

  @font-face {
    font-family: 'Fredoka SemiBold'; //600
    src: url(${FredokaSemiBold}) format('truetype');
  }

  @font-face {
    font-family: 'Fredoka Medium'; //500
    src: url(${FredokaMedium}) format('truetype');
  }
  
  @font-face {
    font-family: 'Fredoka Regular'; //400
    src: url(${FredokaRegular}) format('truetype');
  }

  @font-face {
    font-family: 'Fredoka Light'; //300
    src: url(${FredokaLight}) format('truetype');
  }
  `;
