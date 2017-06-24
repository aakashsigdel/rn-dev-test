import { API_HOST } from '../constants';

export const setEmail = email => {
  return {
    type: 'SET_EMAIL',
    email
  }
};

export const setPassword = password => ({
  type: 'SET_PASSWORD',
  password
});

const requestLogin = () => ({ type: 'REQUEST_LOGIN' });

const receiveLogin = json => {
  return {
    type: 'RECEIVE_LOGIN',
    json
  }
};

const errorLogin = error => ({
  type: 'ERROR_LOGIN',
  error
});

export const login = () =>
  (dispatch, getState) => {
    dispatch(requestLogin());
    const { email, password } = getState().login;

    const formData = new FormData();
    formData.append('grant_type', 'client_credentials');
    formData.append('client_id', email);
    formData.append('client_secret', password);

    return fetch(API_HOST + '/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      body: formData
    })
    .then(resp => resp.json())
    .then(json => dispatch(receiveLogin(json)))
    .catch(err => dispatch(errorLogin(err)))
  };
