import {
  FETCHING_DATA
} from './types';

export const createAction = (type, payload) => {
  return {
    type,
    payload
  }
};

export const generateFetch = payload => (dispatch) => {
  dispatch(createAction(FETCHING_DATA, payload))
  return fetch(payload.url, {
      method: payload.method
    })
    .then(response => response.json())
    .then(json => dispatch(createAction(payload.success, json)))
    .catch(error => dispatch(createAction(payload.failure, error)))
};
