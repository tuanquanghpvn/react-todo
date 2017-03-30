import {
  ADD_TODO, ADD_TODO_SUCCESS, ADD_TODO_ERROR,
  REMOVE_TODO, REMOVE_TODO_SUCCESS, REMOVE_TODO_ERROR,
} from '../constants/todo';

export default function todo(state = {
  todoList: null,
  todoInfo: null,
  loading: false,
  error: null,
}, action) {
  switch (action.type) {
    case ADD_TODO:
    case ADD_TODO_SUCCESS:
    case ADD_TODO_ERROR:
    case REMOVE_TODO:
    case REMOVE_TODO_SUCCESS:
    case REMOVE_TODO_ERROR:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
