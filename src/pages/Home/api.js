import { SET_GISTS_SUCCESS, SET_GISTS_FAILURE } from '../../flux/gist/types';
import { SET_USER_SUCCESS, SET_USER_FAILURE } from '../../flux/user/types';

export const FETCH_GET_GISTS = url => ({
  url,
  method: 'GET',
  success: SET_GISTS_SUCCESS,
  failure: SET_GISTS_FAILURE
});

export const FETCH_GET_USER = username => ({
  url: `users/${username}`,
  method: 'GET',
  success: SET_USER_SUCCESS,
  failure: SET_USER_FAILURE
});
