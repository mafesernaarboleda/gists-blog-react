import { SET_GISTS_SUCCESS, SET_GISTS_FAILURE } from '../../flux/gist/types';

const FETCH_GET_GISTS = url => ({
  url,
  method: 'GET',
  success: SET_GISTS_SUCCESS,
  failure: SET_GISTS_FAILURE
});

export default FETCH_GET_GISTS;
