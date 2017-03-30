import { combineReducers } from 'redux';
import runtime from './runtime';
import login from './login';
import todo from './todo';

export default combineReducers({
  runtime,
  login,
  todo,
});
