import React from 'react';
import './about.css';
import './about_responsive.css';
import './about.js';
import './Login.css';

import Header from '../Header.js';

import Navbar from '../Navbar/Navbar.js';

import TrackerReact from 'meteor/ultimatejs:tracker-react';

class Login extends TrackerReact(React.Component) {
  	constructor(){
    	super();
    	var logged = this.logIn();
    	this.state = {
      		isLoggedIn: logged,
    	}
  	}
  	logIn(){
    	return Meteor.userId() != null;
  	}
	register(event){
		var Profile = {
        	firstname: $("#name").val(),
        	lastname: $("#lastname").val(),
        	identity: $("#identity").val(),
	        number: $("#number").val(),
	        admin: false
      	}
      	var User = {
	        username: $("#email").val(),
	        email: $("#email").val(),
	        password: $("#pass").val(),
	        profile: Profile
      	}
        const self = this;
      	Accounts.createUser(User, function(err){
        	if(err){
          		Bert.alert( 'No se pudo registrar el usuario.', 'danger', 'fixed-bottom', 'fa-frown-o' );
        	}else{
          		Bert.alert( 'Usuario registrado exitosamente!', 'success', 'fixed-bottom', 'fa-smile-o' );
              	self.setState({isLoggedIn: true});
          		FlowRouter.go('/home');
        	}
      	});
	}

  	handleLogout(){
    	this.setState({isLoggedIn: false});
    	Meteor.logout();
    	Bert.alert( 'Adios!', 'info', 'fixed-bottom', 'fa-sign-out' );
  	}

	login1(){
    	const self = this;
		Meteor.loginWithPassword($("#userLogin").val(), $("#passLogin").val(), function(error){
        	if(error){
          		Bert.alert( 'El correo electrónico y/o contraseña que ha introducido son incorrectos.', 'danger', 'fixed-bottom', 'fa-frown-o' );
        	}else{
          		Bert.alert( 'Login Successfully!', 'success', 'fixed-bottom', 'fa-smile-o' );
          		self.setState({isLoggedIn: true});
          		FlowRouter.go('/home');
        	}
      	});
	}

  	goHome(){
    	FlowRouter.go('/home');
  	}
  	render() {

    const login = (
      	<div className="container  container2">
        	<h1 className="registertitle"> Iniciar Sesión </h1>
        	<div className="container centrado container2">
          		<div className="row">

            		<div className="col-sm">
              			<label className="tag">Usuario: </label>
              			<input className="newsletter_input2" type="text" id="userLogin"/>
            		</div>
          		</div>

          		<div className="row">
            		<div className="col-sm">
              			<label className="tag">Contraseña: </label>
              			<input className="newsletter_input2" type="password" id="passLogin"/>
            		</div>
          		</div>
        	</div>
        	<button className="btn btn-secondary centrar" onClick={this.login1.bind(this)}>Login</button>
      	</div>
    );

    const register = (
      	<div className="container container2">
        	<h1 className="registertitle">Registrarse</h1>

        	<div className="container container2">

          		<div className="row">

            		<div className="col-sm">
              			<label className="tag1">Nombres: </label>
              			<input className="newsletter_input1" type="text"  id="name"/>
            		</div>

            		<div className="col-sm">
              			<label className="tag1">Apellidos: </label>
              			<input className="newsletter_input1" type="text"  id="lastname"/>
            		</div>
          		</div>

	          	<div className="row">

	            	<div className="col-sm">
	              		<label  className="tag1">Usuario: </label>
	              		<input className="newsletter_input1" type="text"  id="user"/>
	            	</div>

	            	<div className="col-sm">
	              		<label className="tag1">Identidad: </label>
	              		<input className="newsletter_input1" type="text"  id="identity"/>
	            	</div>
	          	</div>

	          	<div className="row">
	            	<div className="col-sm">
	              		<label className="tag1">Contraseña: </label>
	              		<input className="newsletter_input1" type="password"  id="pass"/>
	            	</div>

	            	<div className="col-sm">
	              		<label className="tag1">Confirmar Contraseña: </label>
	              		<input className="newsletter_input1" type="password"  id="pass2"/>
	            	</div>
	          	</div>

	          	<div className="row">

	            	<div className="col-sm">
	              		<label className="tag1">Telefono/Celular: </label>
	              		<input className="newsletter_input1" type="text"  id="number"/>
	            	</div>

	            	<div className="col-sm">
	              		<label className="tag1">Correo electronico: </label>
	              		<input className="newsletter_input1" type="e-mail"  id="email"/>
	            	</div>
	          	</div>

	        </div>
        	<button className="btn btn-dark registerbtn" onClick={this.register.bind(this)}>Registrar</button>
      	</div>
    );
    return (
    	<div>
    		<Navbar isLoggedIn={this.state.isLoggedIn} handleLogout={this.handleLogout.bind(this)}> </Navbar>
    		<div id="loginView" className="background container-fluid">
            { this.state.loggedIn ? (
              <div className="row centerVert">
                <button className="newsletter_button2" onClick={this.goHome}>Ver Eventos</button>
              </div>
            ) : (
              <div className="row centerVert">
                <div className="col login">
                  {login}
                </div>
                <div className="col register">
                  {register}
                </div>
              </div>
            )}
	      	</div>
			<div className="about">
				<div className="container">
					<div className="row">

						<div className="col-lg-6">
							<div className="about_content">
								<div className="section_title">Sobre Nosotros</div>
								<div className="section_subtitle">Transparencia por un mejor mañana</div>
								<div className="about_text">
									<p>Somos una ONG en Tegucigalpa, Honduras. Nos dedicamos a ayudar a quien m&aacute;s lo necesite con el objetivo de mostrar transparencia a quienes realizan donaciones. Nuestra plataforma es 100% transparente en sus eventos, mostrandole a las personas en que se utiliza la recaudación lograda. </p>
								</div>
							</div>
						</div>

						<div className="col-lg-6">
							<div className="about_image"><img src="/img/intercambio.png" alt=""/></div>
						</div>
					</div>
					<div className="row milestones_row">

						<div className="col-lg-3 milestone_col">
							<div className="milestone d-flex flex-row align-items-center justify-content-start">
								<div className="milestone_icon d-flex flex-column align-items-center justify-content-center"><img src="/img/milestones_1.png" alt=""/></div>
								<div className="milestone_content">
									<div className="milestone_counter" data-end-value="651">99</div>
									<div className="milestone_text">Recaudaciones Exitosas</div>
								</div>
							</div>
						</div>

						<div className="col-lg-3 milestone_col">
							<div className="milestone d-flex flex-row align-items-center justify-content-start">
								<div className="milestone_icon d-flex flex-column align-items-center justify-content-center"><img src="/img/milestones_2.png" alt=""/></div>
								<div className="milestone_content">
									<div className="milestone_counter" data-end-value="1256">50</div>
									<div className="milestone_text">Familias Ayudadas</div>
								</div>
							</div>
						</div>

						<div className="col-lg-3 milestone_col">
							<div className="milestone d-flex flex-row align-items-center justify-content-start">
								<div className="milestone_icon d-flex flex-column align-items-center justify-content-center"><img src="/img/milestones_3.png" alt=""/></div>
								<div className="milestone_content">
									<div className="milestone_counter" data-end-value="124">49</div>
									<div className="milestone_text">Escuelas Ayudadas</div>
								</div>
								
							</div>
						</div>

						<div className="col-lg-3 milestone_col">
							<div className="milestone d-flex flex-row align-items-center justify-content-start">
								<div className="milestone_icon d-flex flex-column align-items-center justify-content-center"><img src="/img/milestones_4.png" alt=""/></div>
								<div className="milestone_content">
									<div className="milestone_counter" data-end-value="25">3</div>
									<div className="milestone_text">Premios Ganados</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>

			<div className="realtors">
				<div className="container">
					<div className="row">
						<div className="col">
							<div className="section_title">Miembros</div>
							<div className="section_subtitle">Transparencia obligación de todos</div>
						</div>
					</div>
					<div className="row realtors_row">
						
						<div className="col-lg-3 col-md-6">
							<div className="realtor_outer">
								<div className="realtor">
									<div className="realtor_image"><img src="/img/christian.jpeg"/></div>
									<div className="realtor_body">
										<div className="realtor_title">Christian E. Rodriguez</div>
										<div className="realtor_subtitle">CMO</div>
									</div>
									<div className="realtor_link"><a href="#">+</a></div>
								</div>
								<div className="realtor_link_background_container">
									<div><div className="realtor_link_background"></div></div>
								</div>
							</div>
						</div>

						<div className="col-lg-3 col-md-6">
							<div className="realtor_outer">
								<div className="realtor">
									<div className="realtor_image"><img src="/img/dario.jpeg"/></div>
									<div className="realtor_body">
										<div className="realtor_title">Dario O. Villalta</div>
										<div className="realtor_subtitle">CEO </div>
									</div>
									<div className="realtor_link"><a href="#">+</a></div>
								</div>
								<div className="realtor_link_background_container">
									<div><div className="realtor_link_background"></div></div>
								</div>
							</div>
						</div>

						<div className="col-lg-3 col-md-6">
							<div className="realtor_outer">
								<div className="realtor">
									<div className="realtor_image"><img src="/img/jordi.jpeg"/></div>
									<div className="realtor_body">
										<div className="realtor_title">Jordi R. Mairena</div>
										<div className="realtor_subtitle">CTO</div>
									</div>
									<div className="realtor_link"><a href="#">+</a></div>
								</div>
								<div className="realtor_link_background_container">
									<div><div className="realtor_link_background"></div></div>
								</div>
							</div>
						</div>

						<div className="col-lg-3 col-md-6">
							<div className="realtor_outer">
								<div className="realtor">
									<div className="realtor_image"><img src="/img/miguel.jpeg"/></div>
									<div className="realtor_body">
										<div className="realtor_title">Miguel A. Ardon</div>
										<div className="realtor_subtitle">CISO</div>
									</div>
									<div className="realtor_link"><a href="#">+</a></div>
								</div>
								<div className="realtor_link_background_container">
									<div><div className="realtor_link_background"></div></div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>

			<div className="newsletter">
				<div className="parallaxCust"></div>
				<div className="home_container">
					<div className="container">
						<div className="row">
							<div className="col">
								<div className="newsletter_content d-flex flex-lg-row flex-column align-items-start justify-content-start">
									<div className="newsletter_title_container">
										<div className="newsletter_title">Deseas mantenerte informado?</div>
										<div className="newsletter_subtitle">Transparencia por un mejor mañana</div>
									</div>
									<div className="newsletter_form_container">
										<form action="#" className="newsletter_form">
											<input type="email" className="newsletter_input" placeholder="Your e-mail address" required="required"/>
											<button className="newsletter_button">Suscribirse</button>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
  }
}
export default Login;