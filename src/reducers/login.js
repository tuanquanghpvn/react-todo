/**
 * Created by truong.tuan.quang on 3/29/17.
 */

import { LOGIN, LOGIN_SUCCESS, LOGIN_ERROR } from '../constants/login';

export default function login(state = {
  userInfo: null,
  loading: false,
  error: null,
}, action) {
  switch (action.type) {
    case LOGIN:
    case LOGIN_SUCCESS:
    case LOGIN_ERROR:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
