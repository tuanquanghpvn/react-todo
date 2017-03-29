import { combineReducers } from 'redux';
import user from './user';
import runtime from './runtime';
import login from './login';

export default combineReducers({
  user,
  runtime,
  login,
});
