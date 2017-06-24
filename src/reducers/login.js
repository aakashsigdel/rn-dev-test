const initialState = {
  email: 'aakash.sigdel@gmail.com',
  password: 'dk5j4uafcF9dabEIpjjbOPTP',
  isLoading: false,
  auth: null,
  error: null
};

const login = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_EMAIL':
      return {
        ...state,
        email: action.email
      }
    case 'SET_PASSWORD':
      return {
        ...state,
        password: action.password
      }
    case 'REQUEST_LOGIN':
      return {
        ...state,
        isLoading: true
      }
    case 'RECEIVE_LOGIN':
      return {
        ...state,
        auth: action.json,
        isLoading: false
      }
    case 'ERROR_LOGIN':
      return {
        ...state,
        error: action.error,
        isLoading: false
      }
  }
  return state;
}

export default login;
