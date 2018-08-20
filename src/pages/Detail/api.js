
import {
  SET_COMMENTS_SUCCESS,
  SET_COMMENTS_FAILURE,
  SET_GIST_SUCCESS,
  SET_GIST_FAILURE
} from '../../flux/gist/types';

export const FETCH_GET_COMMENTS = gist => ({
  url: `gists/${gist}/comments`,
  method: 'GET',
  success: SET_COMMENTS_SUCCESS,
  failure: SET_COMMENTS_FAILURE
});

export const FETCH_GET_GIST = gist => ({
  url: `gists/${gist}`,
  method: 'GET',
  success: SET_GIST_SUCCESS,
  failure: SET_GIST_FAILURE
});
