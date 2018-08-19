import {
  SET_GISTS_SUCCESS,
  SET_GISTS_FAILURE,
  FETCHING_GISTS
}
from './types';

export const setListGists = (payload) => ({
  type: SET_GISTS_SUCCESS,
  payload
});

export const fetching = () => ({
  type: FETCHING_GISTS
});

export const setFailFetching = (payload) => ({
  type: SET_GISTS_FAILURE,
  payload
});
