import {
  SET_GISTS_SUCCESS,
  FETCHING_GISTS,
  SET_GISTS_FAILURE
}
from './types';
import {
  createReducer
} from '../config';

const initialState = {
  listGists: [],
  error: '',
  loading: false
};

const setListGists = (state = initialState, {
  payload
}) => {
  state.listGists = payload
  state.loading = false
  return ({
    ...state
  })
};

const fetching = (state = initialState) => {
  state.loading = true
  return ({
    ...state
  })
};

const setFailFetching = (state = initialState, {
  payload
}) => {
  state.error = payload
  return ({
    ...state
  })
};

const descriptor = {
  [FETCHING_GISTS]: fetching,
  [SET_GISTS_SUCCESS]: setListGists,
  [SET_GISTS_FAILURE]: setFailFetching
};

export default createReducer(initialState, descriptor);
