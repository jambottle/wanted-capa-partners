import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from 'styles/GlobalStyle';
import GlobalFonts from 'styles/GlobalFonts';
import Router from 'Router';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <GlobalFonts />
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);
