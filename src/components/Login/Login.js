/**
 * Created by truong.tuan.quang on 3/29/17.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Login.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }

  onChangeUsername = (e) => {
    this.setState({ username: e.target.value });
  };

  onChangePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    console.log(this.props);
    // props.loginThunk({ username, password });
  };

  render() {
    const { username, password, loading } = this.state;
    return (
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input className="form-control" type="text" name="username" value={username} onChange={this.onChangeUsername} />
            </div>

            <div className="form-group">
              <label htmlFor="passowrd">Password</label>
              <input className="form-control" type="text" name="password" value={password} onChange={this.onChangePassword} />
            </div>

            {loading}

            <button className="btn btn-primary" type="submit">Login</button>
          </form>


        </div>
      </div>
    );
  }
}

Login.PropTypes = {
  loginThunk: PropTypes.func,
  loading: PropTypes.bool,
};

export default withStyles(s)(Login);
