import React from 'react';
import { Provider } from 'react-redux';

import App from './containers';
import Routes from './Routes';
import store from './store';

const Root = () =>
  <Provider store={store}>
    <Routes />
  </Provider>;

export default Root;
