import React from 'react';
import './about.css';
import './about_responsive.css';
import './about.js';
import './Login.css';

import Header from '../Header.js';

import Navbar from '../Navbar/Navbar.js';

class Login extends React.Component {
  constructor(){
    super();
    var logged = this.logIn();
    this.state = {
      isLoggedIn: logged,
    }
  }
  logIn(){
    console.log(Meteor.userId());
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
      	Accounts.createUser(User, function(err){
        	if(err){
          		Bert.alert( 'No se pudo registrar el usuario.', 'danger', 'fixed-top', 'fa-frown-o' );
        	}else{
          		Bert.alert( 'Usuario registrado exitosamente!', 'success', 'fixed-top', 'fa-frown-o' );
              this.setState({isLoggedIn: true})
          		FlowRouter.go('/home');
        	}
      	});
	}

	login1(){
    const self = this;
		Meteor.loginWithPassword($("#userLogin").val(), $("#passLogin").val(), function(error){
        	if(error){
          		Bert.alert( 'El correo electrónico y/o contraseña que ha introducido son incorrectos.', 'danger', 'fixed-top', 'fa-frown-o' );
        	}else{
          		Bert.alert( 'Login Successfully!', 'success', 'fixed-top', 'fa-frown-o' );
          		FlowRouter.go('/home');
              self.setState({isLoggedIn: true});
        	}
      	});
	}
  	render() {

    const login = (
      	<div className="container  container2">
        	<h1 className="registertitle"> Iniciar Sesion </h1>
        	<div className="container centrado container2">
          		<div className="row">

            		<div className="col-sm">
              			<label className="tag">Usuario: </label>
              			<input type="text" id="userLogin"/>
            		</div>
          		</div>

          		<div className="row">
            		<div className="col-sm">
              			<label className="tag">Contraseña: </label>
              			<input type="password" id="passLogin"/>
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
              			<label className="registerlabel">Nombres: </label>
              			<input type="text" className="registerinput" id="name"/>
            		</div>

            		<div className="col-sm">
              			<label className="registerlabel">Apellidos: </label>
              			<input type="text" className="registerinput" id="lastname"/>
            		</div>
          		</div>

	          	<div className="row">

	            	<div className="col-sm">
	              		<label  className="registerlabel">Usuario: </label>
	              		<input type="text" className="registerinput" id="user"/>
	            	</div>

	            	<div className="col-sm">
	              		<label className="registerlabel">Identidad: </label>
	              		<input type="text" className="registerinput" id="identity"/>
	            	</div>
	          	</div>

	          	<div className="row">
	            	<div className="col-sm">
	              		<label className="registerlabel">Contraseña: </label>
	              		<input type="password" className="registerinput" id="pass"/>
	            	</div>

	            	<div className="col-sm">
	              		<label className="registerlabel">Confirmar Contraseña: </label>
	              		<input type="password" className="registerinput"  id="pass2"/>
	            	</div>
	          	</div>

	          	<div className="row">

	            	<div className="col-sm">
	              		<label className="registerlabel">Telefono/Celular: </label>
	              		<input type="text" className="registerinput" id="number"/>
	            	</div>

	            	<div className="col-sm content">
	              		<label className="registerlabel">Correo electronico: </label>
	              		<input type="e-mail" className="registerinput" id="email"/>
	            	</div>
	          	</div>

	        </div>
        	<button className="btn btn-dark registerbtn" onClick={this.register.bind(this)}>Registrar</button>
      	</div>
    );
	let isLoggedIn = false;
    return (
    	<div>
    		<Navbar isLoggedIn={this.state.isLoggedIn}> </Navbar>
    		<div id="loginView" className="background container-fluid">
	        	<div className="row centerVert">
	          		<div className="col login">
	            		{login}
	          		</div>
	          		<div className="col register">
	            		{register}
	          		</div>
	        	</div>
	      	</div>
			<div className="about">
				<div className="container">
					<div className="row">

						<div className="col-lg-6">
							<div className="about_content">
								<div className="section_title">A few words about us</div>
								<div className="section_subtitle">Search your dream home</div>
								<div className="about_text">
									<p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit amet tellus blandit. Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul. Donec in tempus leo. Aenean ultricies mauris sed quam lacinia lobortis. Cras ut vestibulum enim, in gravida nulla. Curabitur ornare nisl at sagittis cursus. Sed mattis, eros non vulputate luctus, erat dui dapibus augue, eu fringilla tortor ante id mi. Sed a enim libero. Vestibulum pharetra aliquam convallis. </p>
								</div>
							</div>
						</div>

						<div className="col-lg-6">
							<div className="about_image"><img src="images/about_image.jpg" alt=""/></div>
						</div>
					</div>
					<div className="row milestones_row">

						<div className="col-lg-3 milestone_col">
							<div className="milestone d-flex flex-row align-items-center justify-content-start">
								<div className="milestone_icon d-flex flex-column align-items-center justify-content-center"><img src="/img/milestones_1.png" alt=""/></div>
								<div className="milestone_content">
									<div className="milestone_counter" data-end-value="651">0</div>
									<div className="milestone_text">Properties Sold</div>
								</div>
							</div>
						</div>

						<div className="col-lg-3 milestone_col">
							<div className="milestone d-flex flex-row align-items-center justify-content-start">
								<div className="milestone_icon d-flex flex-column align-items-center justify-content-center"><img src="/img/milestones_2.png" alt=""/></div>
								<div className="milestone_content">
									<div className="milestone_counter" data-end-value="1256">0</div>
									<div className="milestone_text">Happy Clients</div>
								</div>
							</div>
						</div>

						<div className="col-lg-3 milestone_col">
							<div className="milestone d-flex flex-row align-items-center justify-content-start">
								<div className="milestone_icon d-flex flex-column align-items-center justify-content-center"><img src="/img/milestones_3.png" alt=""/></div>
								<div className="milestone_content">
									<div className="milestone_counter" data-end-value="124">0</div>
									<div className="milestone_text">Buildings Sold</div>
								</div>
								
							</div>
						</div>

						<div className="col-lg-3 milestone_col">
							<div className="milestone d-flex flex-row align-items-center justify-content-start">
								<div className="milestone_icon d-flex flex-column align-items-center justify-content-center"><img src="/img/milestones_4.png" alt=""/></div>
								<div className="milestone_content">
									<div className="milestone_counter" data-end-value="25">0</div>
									<div className="milestone_text">Awards Won</div>
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
							<div className="section_title">The Realtors</div>
							<div className="section_subtitle">Search your dream home</div>
						</div>
					</div>
					<div className="row realtors_row">
						
						<div className="col-lg-3 col-md-6">
							<div className="realtor_outer">
								<div className="realtor">
									<div className="realtor_image"><img src="images/realtor_1.jpg" alt=""/></div>
									<div className="realtor_body">
										<div className="realtor_title">Maria Williams</div>
										<div className="realtor_subtitle">Senior Realtor</div>
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
									<div className="realtor_image"><img src="images/realtor_2.jpg" alt=""/></div>
									<div className="realtor_body">
										<div className="realtor_title">Christian Smith</div>
										<div className="realtor_subtitle">Senior Realtor</div>
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
									<div className="realtor_image"><img src="images/realtor_3.jpg" alt=""/></div>
									<div className="realtor_body">
										<div className="realtor_title">Steve G. Brown</div>
										<div className="realtor_subtitle">Senior Realtor</div>
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
									<div className="realtor_image"><img src="images/realtor_4.jpg" alt=""/></div>
									<div className="realtor_body">
										<div className="realtor_title">Jessica Walsh</div>
										<div className="realtor_subtitle">Senior Realtor</div>
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
										<div className="newsletter_title">Are you buying or selling?</div>
										<div className="newsletter_subtitle">Search your dream home</div>
									</div>
									<div className="newsletter_form_container">
										<form action="#" className="newsletter_form">
											<input type="email" className="newsletter_input" placeholder="Your e-mail address" required="required"/>
											<button className="newsletter_button">subscribe now</button>
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