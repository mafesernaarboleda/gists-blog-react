import {
  FETCHING_USER,
  SET_USER_SUCCESS,
  SET_USER_FAILURE
} from './types';
import createReducer from '../config';

const initialState = {
  profile: {},
  error: '',
  loading: false
};

const setUser = (state = initialState, {
  payload
}) => ({
  ...state,
  profile: payload,
  loading: false
});

const fetching = (state = initialState) => ({
  ...state,
  loading: true
});

const setFailFetching = (state = initialState, {
  payload
}) => ({
  ...state,
  error: payload
});

const descriptor = {
  [FETCHING_USER]: fetching,
  [SET_USER_SUCCESS]: setUser,
  [SET_USER_FAILURE]: setFailFetching,
};

export default createReducer(initialState, descriptor);
