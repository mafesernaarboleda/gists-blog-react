import { FETCHING_GISTS, SET_SEARCH } from './types';

export const fetching = () => ({
  type: FETCHING_GISTS
});

export const setSearch = payload => ({
  type: SET_SEARCH,
  payload
});
