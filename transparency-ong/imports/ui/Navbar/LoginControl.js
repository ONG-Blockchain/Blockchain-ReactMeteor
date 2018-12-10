import React from 'react';

function LoginButton(props) {
  return (
    <span class="navbar-text">
      Bienvenido!
    </span>
  );
}

function LogoutButton(props) {
  return (
    <span class="navbar-text">
      <button class="btn btn-outline-success my-2 my-sm-0" >Cerrar Sesi&oacute;n</button>
    </span>
  );
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: props.isLoggedIn};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        {button}
      </div>
    );
  }
}
export default LoginControl;