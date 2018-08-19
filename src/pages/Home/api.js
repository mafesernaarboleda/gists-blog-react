import {
  SET_GISTS_SUCCESS,
  SET_GISTS_FAILURE,
  SET_COMMENTS_SUCCESS,
  SET_COMMENTS_FAILURE
} from '../../flux/gist/types';

import {
  SET_USER_SUCCESS,
  SET_USER_FAILURE
} from '../../flux/user/types';

export const FETCH_GET_GISTS = () => ({
  url: 'gists/public',
  method: 'GET',
  success: SET_GISTS_SUCCESS,
  failure: SET_GISTS_FAILURE
});

export const FETCH_GET_COMMENTS = gist => ({
  url: `gists/${gist}/comments`,
  method: 'GET',
  success: SET_COMMENTS_SUCCESS,
  failure: SET_COMMENTS_FAILURE
});


export const FETCH_GET_USER = username => ({
  url: `users/${username}`,
  method: 'GET',
  success: SET_USER_SUCCESS,
  failure: SET_USER_FAILURE
});
