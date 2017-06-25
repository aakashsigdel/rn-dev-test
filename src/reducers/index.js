import { combineReducers } from 'redux';

import login from './login';
import jobs from './jobs';

const rootReducer = combineReducers({
  login,
  jobs
});

export default rootReducer;
