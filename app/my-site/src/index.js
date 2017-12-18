import React from 'react';
import ReactDOM from 'react-dom';
import {
  Provider
} from 'react-redux';

import App from './containers/App'
import store from './store';
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.render(
  <Provider store={store}>
    <AppContainer>
      <Component />
    </AppContainer>
  </Provider>,
  document.getElementById('app')
);
