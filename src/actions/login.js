import API_HOST from '../constants';

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

const receiveLogin = json => ({
  type: 'RECEIVE_LOGIN',
  json
});

const errorLogin = error => ({
  type: 'ERROR_LOGIN',
  error
});

export const login = () =>
  (dispatch, getState) => {
    dispatch(requestLogin());
    const { email, password } = getState().login;
    const grant_type = 'client_credentials';

    return fetch(API_HOST + '/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        grant_type,
        client_id: email,
        client_secret: password
      })
    })
    .then(resp => resp.json())
    .then(receiveLogin)
    .catch(errorLogin)
  };
