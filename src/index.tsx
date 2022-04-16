import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from 'styles/GlobalStyle';
import GlobalFonts from 'styles/GlobalFonts';
import Router from 'Router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <GlobalFonts />
    <Router />
  </React.StrictMode>
);
