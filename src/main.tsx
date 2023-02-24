import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import GlobalStyles from './styles/global';

const root = ReactDOM.createRoot(
  document.querySelector('#root') as HTMLElement
);

root.render(
  <React.Fragment>
    <App />
    <GlobalStyles />
  </React.Fragment>
);
