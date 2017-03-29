/**
 * Created by truong.tuan.quang on 3/29/17.
 */

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// Actions
import { loginThunk } from './LoginThunk';
// Components
import Login from './Login';

function mapStateToProps(state) {
  return {
    error: state.login.error,
    loading: state.login.loading,
    userInfo: state.login.userInfo,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    loginThunk,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
