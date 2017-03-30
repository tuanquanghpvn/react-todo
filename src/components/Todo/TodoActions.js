/* eslint-disable import/prefer-default-export */

import {
  ADD_TODO, ADD_TODO_SUCCESS, ADD_TODO_ERROR,
  REMOVE_TODO, REMOVE_TODO_SUCCESS, REMOVE_TODO_ERROR,
} from '../../constants/todo';

export function addTodo() {
  return {
    type: ADD_TODO,
    payload: {
      loading: true,
    },
  };
}

export function addTodoSuccess({ todo }) {
  return {
    type: ADD_TODO_SUCCESS,
    payload: {
      loading: false,
      todo,
    },
  };
}

export function addTodoError({ error }) {
  return {
    type: ADD_TODO_ERROR,
    payload: {
      loading: false,
      error,
    },
  };
}

export function removeTodo() {
  return {
    type: REMOVE_TODO,
    payload: {
      loading: true,
    },
  };
}

export function removeTodoSuccess({ todo }) {
  return {
    type: REMOVE_TODO_SUCCESS,
    payload: {
      loading: false,
      todo,
    },
  };
}

export function removeTodoError({ error }) {
  return {
    type: REMOVE_TODO_ERROR,
    payload: {
      loading: false,
      error,
    },
  };
}
