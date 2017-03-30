/**
 * Created by truong.tuan.quang on 3/29/17.
 */
import { login, loginSuccess, loginError } from './LoginActions';

export const loginThunk = ({ username, password }) => (dispatch, getState, { history }) => {
  dispatch(login());
  return new Promise((resolve, reject) => {
    resolve();
    // reject();
  }).then((rs) => {
    dispatch(loginSuccess({ rs }));
    history.push('/todo'); // redirect todo page
  }).catch((error) => {
    dispatch(loginError({ error }));
  });
};

