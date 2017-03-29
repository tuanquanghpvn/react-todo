/* eslint-disable import/prefer-default-export */

import { LOGIN, LOGIN_SUCCESS, LOGIN_ERROR } from '../../constants/login';

export function login() {
  return {
    type: LOGIN,
    payload: {
      loading: true,
    },
  };
}

export function loginSuccess({ userInfo }) {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      loading: false,
      userInfo,
    },
  };
}

export function loginError({ error }) {
  return {
    type: LOGIN_ERROR,
    payload: {
      loading: false,
      error,
    },
  };
}

