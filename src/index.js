import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import Router from './Router';
import GlobalStyle from './styles/GlobalStyle';
import GlobalFont from './styles/font';
import { colors, common, media } from './styles';

ReactDOM.render(
  <>
    <GlobalStyle />
    <GlobalFont />
    <ThemeProvider theme={{ colors, style: common, media }}>
      <Router />
    </ThemeProvider>
  </>,
  document.getElementById('root')
);
