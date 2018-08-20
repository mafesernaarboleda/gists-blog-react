import {
  FETCHING_GISTS,
  SET_GISTS_SUCCESS,
  SET_GISTS_FAILURE,
  SET_COMMENTS_SUCCESS,
  SET_COMMENTS_FAILURE,
  SET_GIST_SUCCESS,
  SET_GIST_FAILURE,
  SET_SEARCH
} from './types';
import createReducer from '../config';

const initialState = {
  listGists: [],
  commentsByGist: [],
  gistById: {},
  error: '',
  loading: false,
  search: ''
};

const setListGists = (state = initialState, {
  payload
}) => ({
  ...state,
  listGists: payload,
  loading: false,
  gistById: {}
});

const setListComments = (state = initialState, {
  payload
}) => ({
  ...state,
  commentsByGist: payload,
  loading: false
});

const setGistById = (state = initialState, {
  payload
}) => ({
  ...state,
  gistById: payload,
  loading: false
});

const setSearch = (state = initialState, {
  payload
}) => ({
  ...state,
  search: payload
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
  [FETCHING_GISTS]: fetching,
  [SET_GISTS_SUCCESS]: setListGists,
  [SET_GISTS_FAILURE]: setFailFetching,
  [SET_COMMENTS_SUCCESS]: setListComments,
  [SET_COMMENTS_FAILURE]: setFailFetching,
  [SET_GIST_SUCCESS]: setGistById,
  [SET_GIST_FAILURE]: setFailFetching,
  [SET_SEARCH]: setSearch
};

export default createReducer(initialState, descriptor);
