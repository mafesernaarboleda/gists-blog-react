import React from 'react';
import {
  Provider
} from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/Home';
import 'bootstrap/dist/css/bootstrap.css';
import store from './flux';

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
