import React from 'react';

import LoginControl from './LoginControl.js';

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

export default class Navbar extends React.Component {
	render() {
		let isLoggedIn = this.props.isLoggedIn;
		let button;

	    if (isLoggedIn) {
	      	button = <LogoutButton onClick={this.handleLogoutClick} />;
	    } else {
	      	button = <LoginButton onClick={this.handleLoginClick} />;
	    }
		return (
			<div>
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
					<a className="navbar-brand" href="#">Navbar</a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item active">
								<a className="nav-link" href="#loginView">Login <span className="sr-only">(current)</span></a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">Link</a>
							</li>
						</ul>
						{button}
					</div>
				</nav>
			</div>
		)
	}
}