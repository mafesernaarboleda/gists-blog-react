import {
  combineReducers,
  createStore,
  applyMiddleware
} from 'redux';
import {
  createLogger
} from 'redux-logger';
import thunk from 'redux-thunk';
import {
  composeWithDevTools
} from 'redux-devtools-extension';
import gist from './gist/reducer';

const reducers = combineReducers({
  gist
});

const loggerMiddleware = createLogger({
  predicate: () => process.env.NODE_ENV,
  collapsed: true,
  duration: true
});
const middlewares = [thunk, loggerMiddleware];

export default createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middlewares))
);
