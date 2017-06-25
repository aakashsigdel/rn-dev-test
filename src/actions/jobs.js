import { API_HOST } from '../constants';
import { login } from './login';

const requestJobs = page => ({
  type: 'REQUEST_JOBS',
  page
});

const receiveJobs = jobs => ({
  type: 'RECEIVE_JOBS',
  jobs
});

const errorJobs = error => ({
  type: 'ERROR_JOBS',
  error
});

const clearJobs = () => ({
  type: 'CLEAR_JOBS'
});

const setLastPage = () => ({
  type: 'SET_LAST_PAGE'
});

export const fetchJobs = page =>
  (dispatch, getState) => {
    if (getState().jobs.lastPage) {
      return
    }
    dispatch(requestJobs(page));

    const URL = API_HOST
      + '/jobs'
      + '/' + page
      + '?token='
      + getState().login.auth.access_token;

    return fetch(URL)
      .then(resp => resp.json())
      .then(json => {
        // putting this logic here instead of a middleware
        // because currently there is no way to refresh a
        // token and there is no proper status code returned
        // for a expired token
        if (json.error === 'invalid_token') {
          dispatch(clearJobs());
          dispatch(login())
          .then(() => dispatch(fetchJobs(1)));
          return;
        }
        const currentJobsLength = getState().jobs.jobs.length;
        const newJobsLength = json.browse.length;
        const totalJobsLength = currentJobsLength + newJobsLength;
        if (totalJobsLength === currentJobsLength) {
          dispatch(setLastPage());
        }
        dispatch(receiveJobs(json.browse));
      })
      .catch(error => dispatch(errorJobs(error)));
  }
