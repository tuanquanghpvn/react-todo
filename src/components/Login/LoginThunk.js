/**
 * Created by truong.tuan.quang on 3/29/17.
 */

import { login, loginSuccess, loginError } from './LoginActions';

export const loginThunk = ({ username, password }) => (dispatch, getState) => {
  dispatch(login());
  return new Promise((resolve, reject) => {
    resolve();
    // reject();
  }).then((rs) => {
    console.log('Come Here');
    dispatch(loginSuccess({ rs }));
    history.push('/home'); // redirect to home
  }).catch((error) => {
    dispatch(loginError({ error }));
  });
};
