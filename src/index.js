import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import GlobalStyle from './styles';
import './styles/index';
import App from './App';

ReactDOM.render(
    <Fragment>
        <GlobalStyle />
        <App />
    </Fragment>,
    document.getElementById('root')
  );