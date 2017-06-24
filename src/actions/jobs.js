import { API_HOST } from '../api';

const requestJobs = () => ({
  type: 'REQUEST_JOBS'
});

const receiveJobs = jobs => ({
  type: 'RECEIVE_JOBS',
  jobs
});

const errorJobs = error => ({
  type: 'ERROR_JOBS',
  error
});

export const fetchJobs = page =>
  (dispatch, getState) => {
    dispatch(requestJobs());

    const URL = API_HOST
      + '/jobs'
      + '/' + page
      + '?token='
      + getState().login.auth.access_token;

    return fetch(URL)
      .then(resp => resp.json())
      .then(json => dispatch(receiveJobs(json)))
      .catch(error => dispatch(errorJobs(error)));
  }
