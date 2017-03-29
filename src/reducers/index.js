import { combineReducers } from 'redux';
import runtime from './runtime';
import login from './login';

export default combineReducers({
  runtime,
  login,
});
