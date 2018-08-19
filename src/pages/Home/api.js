import {
  SET_GISTS_SUCCESS,
  SET_GISTS_FAILURE
} from '../../flux/gist/types';

export const FETCH_GET_GISTS = () => {
  return {
    url: `https://api.github.com/gists/public`,
    method: 'GET',
    success: SET_GISTS_SUCCESS,
    failure: SET_GISTS_FAILURE
  };
};
