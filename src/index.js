import React from 'react';
import {
  Provider
} from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './config/router';
import 'bootstrap/dist/css/bootstrap.css';
import store from './flux';

const Root = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
