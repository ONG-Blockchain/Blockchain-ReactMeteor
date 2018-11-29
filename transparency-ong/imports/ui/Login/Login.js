import React from 'react';
import './Login.css';
export default class Login extends React.Component {
  render() {
    
    return (
      <div className="body">
        <h1 align="center"> Login </h1>
        <div>
          <label>User: </label>
          <input type="text" />
        </div>
        <div>
          <label>Password: </label>
          <input type="password" />
        </div>
        <div className="btn">
          <button>Register</button>
          <button>Login</button>
        </div>
      </div>
    )
  }
}
