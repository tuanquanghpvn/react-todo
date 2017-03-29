/**
 * Created by truong.tuan.quang on 3/29/17.
 */

import { login, loginSuccess, loginError } from './LoginActions';

// export function loginThunk({ username, password }) {
//   return (dispatch, getState) => {
//     dispatch(login());
//     return new Promise((resolve, reject) => {
//       console.log('Come Here 1');
//       resolve();
//       // reject();
//     }).then((rs) => {
//       console.log('Come Here');
//       dispatch(loginSuccess({ rs }));
//       history.push('/home'); // redirect to home
//     }).catch((error) => {
//       console.log('Come Here 2');
//       dispatch(loginError({ error }));
//     });
//   };
// }

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
    console.log('Come Here 2');
    dispatch(loginError({ error }));
  });
};
