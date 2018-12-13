import React from 'react';

import LoginControl from './LoginControl.js';

function LoginButton(props) {
  	return (
    	<span className="navbar-text">
      		Bienvenido!
    	</span>
  	);
}

function LogoutButton(props) {
  	return (
    	<span className="navbar-text">
      		<button onClick={props.handleLogout} className="btn btn-outline-success my-2 my-sm-0" >Cerrar Sesi&oacute;n</button>
    	</span>
  	);
}

export default class Navbar extends React.Component {
	render() {
		let isLoggedIn = this.props.isLoggedIn;
		let button;

	    if (this.props.isLoggedIn) {
	      	button = <LogoutButton handleLogout={this.props.handleLogout}/>;
	    } else {
	      	button = <LoginButton />;
	    }
		return (
			<div>
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
					<a className="navbar-brand" href="/"><img src="/img/logo1SinFon.png" alt="Logo" height="52"/></a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto">
						</ul>
						{button}
					</div>
				</nav>
			</div>
		)
	}
}