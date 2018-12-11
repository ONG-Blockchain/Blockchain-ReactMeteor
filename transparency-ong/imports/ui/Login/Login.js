import React from 'react';
import './about.css';
import './about_responsive.css';
import './about.js';
import './Login.css';
import '../Home/wickedcss.css';

import Header from '../Header.js';

import Navbar from '../Navbar/Navbar.js';

import { Modal } from 'react-bootstrap';

import ModalAward from '../Modals/ModalAward.js';

import anime from 'animejs';


class Login extends React.Component {
  constructor(){
    super();
    var logged = this.logIn();
    this.state = {
      isLoggedIn: logged,
      lgShow: false,
    }
  }
  logIn(){
    Meteor.setTimeout(function(){
      // fun options!
const PARTICLES_PER_FIREWORK = 150; // 100 - 400 or try 1000
const FIREWORK_CHANCE = 0.02; // percentage, set to 0 and click instead
const BASE_PARTICLE_SPEED = 0.6; // between 0-4, controls the size of the overall fireworks
const FIREWORK_LIFESPAN = 600; // ms
const PARTICLE_INITIAL_SPEED = 4.5; // 2-8

// not so fun options =\
const GRAVITY = 9.8;


const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let particles = [];
let disableAutoFireworks = false;
let resetDisable = 0;

let loop = () => {
  
  if (!disableAutoFireworks && Math.random() < FIREWORK_CHANCE) {
    createFirework();
  }
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  particles.forEach((particle, i) => {
    particle.animate();
    particle.render();
    if (particle.y > canvas.height 
        || particle.x < 0 
        || particle.x > canvas.width
        || particle.alpha <= 0
       ) {
      particles.splice(i, 1);
    }
  });
  
  requestAnimationFrame(loop);
  
};

let createFirework = (
    x = Math.random() * canvas.width,
    y = Math.random() * canvas.height
  ) => {
  
  let speed = (Math.random() * 2) + BASE_PARTICLE_SPEED;
  let maxSpeed = speed;

  let red = ~~(Math.random() * 255);
  let green = ~~(Math.random() * 255);
  let blue = ~~(Math.random() * 255);
  
  // use brighter colours
  red = (red < 150 ? red + 150 : red);
  green = (green < 150 ? green + 150 : green);
  blue = (blue < 150 ? blue + 150 : blue);

  // inner firework
  for (let i = 0; i < PARTICLES_PER_FIREWORK; i++) {
    let particle = new Particle(x, y, red, green, blue, speed);
    particles.push(particle);

    maxSpeed = (speed > maxSpeed ? speed : maxSpeed);
  }

  // outer edge particles to make the firework appear more full
  for (let i = 0; i < 40; i++) {
    let particle = new Particle(x, y, red, green, blue, maxSpeed, true);
    particles.push(particle);
  }
  
};

class Particle {
  
  constructor(
    x = 0,
    y = 0, 
    red = ~~(Math.random() * 255), 
    green = ~~(Math.random() * 255), 
    blue = ~~(Math.random() * 255), 
    speed, 
    isFixedSpeed
  ) {
    
    this.x = x;
    this.y = y;
    this.red = red;
    this.green = green;
    this.blue = blue;
    this.alpha = 0.05;
    this.radius = 1 + Math.random();
    this.angle = Math.random() * 360;
    this.speed = (Math.random() * speed) + 0.1;
    this.velocityX = Math.cos(this.angle) * this.speed;
    this.velocityY = Math.sin(this.angle) * this.speed;
    this.startTime = (new Date()).getTime();
    this.duration = Math.random() * 300 + FIREWORK_LIFESPAN;
    this.currentDiration = 0;
    this.dampening = 30; // slowing factor at the end
    
    this.colour = this.getColour();
    
    if (isFixedSpeed) {
      this.speed = speed;
      this.velocityY = Math.sin(this.angle) * this.speed;
      this.velocityX = Math.cos(this.angle) * this.speed;
    }
    
    this.initialVelocityX = this.velocityX;
    this.initialVelocityY = this.velocityY;

  }
  
  animate() {
    
    this.currentDuration = (new Date()).getTime() - this.startTime;
    
    // initial speed kick
    if (this.currentDuration <= 200) {
      
      this.x += this.initialVelocityX * PARTICLE_INITIAL_SPEED;
      this.y += this.initialVelocityY * PARTICLE_INITIAL_SPEED;
      this.alpha += 0.01;

      this.colour = this.getColour(240, 240, 240, 0.9);
      
    } else {
      
      // normal expansion
      this.x += this.velocityX;
      this.y += this.velocityY;
      this.colour = this.getColour(this.red, this.green, this.blue, 0.4 + (Math.random() * 0.3));
      
    }
    
    this.velocityY += GRAVITY / 1000;
    
    // slow down particles at the end
    if (this.currentDuration >= this.duration) {
      this.velocityX -= this.velocityX / this.dampening; 
      this.velocityY -= this.velocityY / this.dampening;
    }
    
    if (this.currentDuration >= this.duration + this.duration / 1.1) {
      
      // fade out at the end
      this.alpha -= 0.02;
      this.colour = this.getColour();
      
    } else {
      
      // fade in during expansion
      if (this.alpha < 1) {
        this.alpha += 0.03;
      }
      
    }
  }
  
  render() {
    
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.lineWidth = this.lineWidth;
    ctx.fillStyle = this.colour;
    ctx.shadowBlur = 8;
    ctx.shadowColor = this.getColour(this.red + 150, this.green + 150, this.blue + 150, 1);
    ctx.fill();
    
  }
  
  getColour(red, green, blue, alpha) {
    
    return `rgba(${red || this.red}, ${green || this.green}, ${blue || this.blue}, ${alpha || this.alpha})`;
    
  }
  
}

let updateCanvasSize = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};


// run it!

updateCanvasSize();
$(window).resize(updateCanvasSize);
$(canvas).on('click', (e) => {
  
  createFirework(e.clientX, e.clientY);
  
  // stop fireworks when clicked, re-enable after short time
  disableAutoFireworks = true;
  clearTimeout(resetDisable);
  resetDisable = setTimeout(() => {
    disableAutoFireworks = false;
  }, 5000);
  
});

loop();


    }, 2000);

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
  lgClose(){
    this.setState({lgShow: false});
  }

	login1(){
    const self = this;
		Meteor.loginWithPassword($("#userLogin").val(), $("#passLogin").val(), function(error){
        	if(error){
          		Bert.alert( 'El correo electrónico y/o contraseña que ha introducido son incorrectos.', 'danger', 'fixed-bottom', 'fa-frown-o' );
        	}else{
          		Bert.alert( 'Login Successfully!', 'success', 'fixed-bottom', 'fa-smile-o' );
          		FlowRouter.go('/home');
              self.setState({isLoggedIn: true});
        	}
      	});
	}
  showAnimation(){
    $("#canvas").css("visibility", "visible");
    var paths = [
      {id: '#path5419', d: 'm 574.27172,479 0,-15.65736 -32.82996,4.54569 z'},
      {id: '#path4232', d: 'm 574.27172,479 -23.23351,25.75889 -9.59645,-36.87056 z'},
      {id: '#path4236', d: 'm 506.33896,522.43656 44.69925,-17.67767 -9.59645,-36.87056 z'},
      {id: '#path4240', d: 'm 506.33896,522.43656 18.18275,-51.26524 16.92005,-3.28299 z'},
      {id: '#path4244', d: 'm 545.22983,415.36039 -20.70812,55.81093 16.92005,-3.28299 z'},
      {id: '#path4248', d: 'm 545.22983,415.36039 -20.70812,55.81093 -29.04189,-24.74873 z'},
      {id: '#path4252', d: 'm 506.33896,522.43656 18.18275,-51.26524 -29.86566,-26.49728 z'},
      {id: '#path4628', d: 'm 545.22983,415.36039 -61.77955,-47.7605 12.02954,78.8227 z'},
      {id: '#path4632', d: 'm 506.33896,522.43656 -23.24582,-0.55095 11.56291,-77.21157 z'},
      {id: '#path4634', d: 'm 545.22983,415.36039 -61.77955,-47.7605 46.6724,-16.53444 z'},
      {id: '#path4636', d: 'm 463.08697,427.86039 20.36331,-60.2605 12.02954,78.8227 z'},
      {id: '#path4644', d: 'm 439.55325,458.86513 43.53989,63.02048 11.56291,-77.21157 z'},
      {id: '#path4646', d: 'm 439.55325,458.86513 22.11132,-30.90809 32.99148,16.717 z'},
      {id: '#path4648', d: 'm 439.55325,458.86513 43.53989,63.02048 -78.07995,-18.99728 z'},
      {id: '#path4656', d: 'm 395.26754,536.00799 87.8256,-14.12238 -78.07995,-18.99728 z'},
      {id: '#path4658', d: 'm 395.26754,536.00799 -47.1744,-29.83667 56.92005,-3.28299 z'},
      {id: '#path4660', d: 'm 395.26754,536.00799 -47.1744,-29.83667 -20.22281,21.71701 z'},
      {id: '#path4662', d: 'm 439.55325,458.86513 -30.74582,10.87762 -3.79424,33.14558 z'},
      {id: '#path4672', d: 'm 355.26754,495.2937 53.53989,-25.55095 -3.79424,33.14558 z'},
      {id: '#path4674', d: 'm 355.26754,495.2937 53.53989,-25.55095 -60.9371,8.14558 z'},
      {id: '#path4676', d: 'm 378.83897,465.2937 29.96846,4.44905 -60.9371,8.14558 z'},
      {id: '#path4678', d: 'm 378.83897,465.2937 29.96846,4.44905 -35.9371,-23.99728 z'},
      {id: '#path4688', d: 'm 438.83897,458.15084 -30.03154,11.59191 -35.9371,-23.99728 z'},
      {id: '#path4690', d: 'm 438.83897,458.15084 22.8256,-29.83666 -88.79424,17.43129 z'},
      {id: '#path4692', d: 'm 416.69611,410.2937 44.96846,18.02048 -88.79424,17.43129 z'},
      {id: '#path4694', d: 'm 416.69611,410.2937 44.96846,18.02048 21.20576,-60.42585 z'},
      {id: '#path4704', d: 'm 499.51554,316.07468 -16.06526,51.52521 46.6724,-16.53444 z'},
      {id: '#path4706', d: 'm 499.51554,316.07468 -16.06526,51.52521 -46.89903,-36.53444 z'},
      {id: '#path4708', d: 'm 417.37268,408.93182 66.0776,-41.33193 -46.89903,-36.53444 z'},
      {id: '#path4729', d: 'm 499.51554,316.07468 -33.20812,-40.61765 -29.75617,55.60842 z'},
      {id: '#path4731', d: 'm 400.94411,254.64611 65.36331,20.81092 -29.75617,55.60842 z'},
      {id: '#path4733', d: 'm 400.94411,254.64611 -42.49383,99.38235 78.10097,-22.96301 z'},
      {id: '#path4735', d: 'm 417.37268,413.21754 -58.9224,-59.18908 78.10097,-22.96301 z'},
      {id: '#path4743', d: 'm 417.37268,413.21754 -58.9224,-59.18908 12.38668,89.17985 z'},
      {id: '#path4747', d: 'm 308.08697,438.21754 50.36331,-84.18908 12.38668,89.17985 z'},
      {id: '#path4749', d: 'm 308.08697,438.21754 50.36331,-84.18908 -48.32761,-19.39158 z'},
      {id: '#path4755', d: 'm 400.94411,254.64611 -42.49383,99.38235 2.38668,-65.10587 z'},
      {id: '#path4757', d: 'm 309.51554,333.93182 48.93474,20.09664 2.38668,-65.10587 z'},
      {id: '#path4776', d: 'm 308.08697,438.21754 -26.06526,-84.18908 28.10096,-19.39158 z'},
      {id: '#path4778', d: 'm 309.51554,333.93182 -11.06526,-83.47479 62.38668,38.46556 z'},
      {id: '#path4780', d: 'm 235.22983,324.64611 46.79188,29.38235 28.10096,-19.39158 z'},
      {id: '#path4799', d: 'm 235.22983,324.64611 46.79188,29.38235 -64.75618,47.75128 z'},
      {id: '#path4801', d: 'm 240.94412,431.07468 41.07759,-77.04622 -64.75618,47.75128 z'},
      {id: '#path4818', d: 'm 240.94412,431.07468 41.07759,-77.04622 25.24382,84.89414 z'},
      {id: '#path4820', d: 'm 240.94412,431.07468 24.64902,30.81092 41.67239,-22.963 z'},
      {id: '#path4822', d: 'm 256.65841,508.93182 8.93473,-47.04622 41.67239,-22.963 z'},
      {id: '#path4824', d: 'm 240.94412,431.07468 24.64902,30.81092 -41.18475,24.17986 z'},
      {id: '#path4858', d: 'm 242.37269,498.21754 23.22045,-36.33194 -41.18475,24.17986 z'},
      {id: '#path4860', d: 'm 241.65841,498.21754 23.93473,-36.33194 -9.75618,47.037 z'},
      {id: '#path4862', d: 'm 235.58698,508.57468 -10.70813,34.73949 30.95811,-34.39157 z'},
      {id: '#path4864', d: 'm 249.51555,534.64611 -24.6367,8.66806 30.95811,-34.39157 z'},
      {id: '#path4866', d: 'm 234.8727,508.21754 -9.99385,35.09663 -21.18475,-9.39157 z'},
      {id: '#path4878', d: 'm 235.58698,508.57468 6.43473,-9.54622 13.81525,9.89414 z'},
      {id: '#path4880', d: 'm 235.58698,508.57468 6.43473,-9.54622 -16.18475,-12.963 z'},
      {id: '#path4961', d: 'm 235.58698,508.57468 -37.1367,-12.40336 27.38668,-10.10586 z'},
      {id: '#path5128', d: 'm 235.58698,508.57468 -35.70813,4.02521 -1.18475,-15.82014 z'},
      {id: '#path5130', d: 'm 188.44412,507.50325 11.43473,5.09664 -1.18475,-15.82014 z'},
      {id: '#path5136', d: 'm 400.94411,254.64611 -48.9224,0.81092 8.81525,33.46556 z'},
      {id: '#path5138', d: 'm 296.6584,251.07468 55.36331,4.38235 8.81525,33.46556 z'},
      {id: '#path5140', d: 'm 309.51554,333.93182 -11.06526,-83.47479 -65.47046,74.17985 z'},
      {id: '#path5142', d: 'm 245.94411,238.93182 52.50617,11.52521 -65.47046,74.17985 z'},
      {id: '#path5144', d: 'm 235.22983,324.64611 -40.35098,0.81092 22.38668,76.32271 z'},
      {id: '#path5166', d: 'm 235.22983,324.64611 -40.35098,0.81092 21.67239,-58.67729 z'},
      {id: '#path5168', d: 'm 245.94411,238.93182 -31.06526,30.09664 18.10097,55.60842 z'},
      {id: '#path5170', d: 'm 245.94411,238.93182 -31.06526,30.09664 -15.47046,-40.10587 z'},
      {id: '#path5172', d: 'm 195.22982,329.64611 19.64903,-60.61765 -15.47046,-40.10587 z'},
      {id: '#path5174', d: 'm 195.22982,329.64611 -9.63668,-57.76051 13.81525,-42.96301 z'},
      {id: '#path5176', d: 'm 169.51553,212.50325 16.07761,59.38235 13.81525,-42.96301 z'},
      {id: '#path5186', d: 'm 169.51553,212.50325 16.07761,59.38235 -50.47046,-45.82015 z'},
      {id: '#path5188', d: 'm 169.51553,212.50325 -33.2081,-19.90336 -1.18475,33.46556 z'},
      {id: '#path5190', d: 'm 169.51553,212.50325 -33.2081,-19.90336 30.24382,-10.82015 z'},
      {id: '#path5200', d: 'm 169.51553,212.50325 28.93476,13.66807 -31.89904,-44.39158 z'},
      {id: '#path5202', d: 'm 213.08696,196.78896 -14.63667,29.38236 -31.89904,-44.39158 z'},
      {id: '#path5204', d: 'm 213.08696,196.78896 -7.49381,-37.7605 -39.0419,22.75128 z'},
      {id: '#path5206', d: 'm 213.08696,196.78896 -7.49381,-37.7605 31.67239,45.60842 z'},
      {id: '#path5208', d: 'm 213.08696,196.78896 -14.63667,29.38236 38.81525,-19.39158 z'},
      {id: '#path5258', d: 'm 213.08696,196.78896 -7.49381,-37.7605 31.67239,45.60842 z'},
      {id: '#path5260', d: 'm 255.9441,158.93182 -50.35095,0.0966 31.67239,45.60842 z'},
      {id: '#path5262', d: 'm 245.22982,238.21753 -46.77953,-12.04621 38.81525,-19.39158 z'},
      {id: '#path5270', d: 'm 245.22982,238.21753 47.50618,-40.2605 -55.47046,8.82271 z'},
      {id: '#path5272', d: 'm 245.22982,238.21753 47.50618,-40.2605 4.1724,52.75128 z'},
      {id: '#path5286', d: 'm 255.94411,160.00324 36.79189,37.95379 -55.47046,8.82271 z'},
      {id: '#path5288', d: 'm 270.94411,147.86038 21.79189,50.09665 28.81525,-22.24872 z'},
      {id: '#path5296', d: 'm 310.58697,148.21752 36.79189,-0.61763 -25.82761,28.10842 z'},
      {id: '#path5298', d: 'm 310.58697,148.21752 -40.70811,0.4538 51.67239,27.03699 z'},
      {id: '#path5306', d: 'm 310.58697,148.21752 36.79189,-0.61763 -24.75618,-22.96301 z'},
      {id: '#path5310', d: 'm 349.1584,132.86038 -1.77954,14.73951 -24.75618,-22.96301 z'},
      {id: '#path5316', d: 'm 349.1584,132.86038 -4.63668,-14.18906 -21.89904,5.96556 z'},
      {id: '#path5324', d: 'm 270.94411,147.86038 21.79189,50.09665 28.81525,-22.24872 z'},
      {id: '#path5341', d: 'm 255.58697,160.00323 14.29189,-11.33191 23.10096,49.89413 z'},
      {id: '#path5343', d: 'm 310.58697,148.21752 -40.70811,0.4538 52.38668,-23.6773 z'},
      {id: '#path5345', d: 'm 293.08697,96.431806 -23.20811,52.239514 52.38668,-23.6773 z'},
      {id: '#path5357', d: 'm 293.08697,96.431806 41.0776,9.739514 -11.89903,18.8227 z'},
      {id: '#path5359', d: 'm 293.08697,96.431806 41.0776,9.739514 -12.97046,-43.6773 z'},
      {id: '#path5361', d: 'm 345.58697,65.003235 -11.4224,41.168085 -12.97046,-43.6773 z'},
    ];

    var timeline = anime.timeline({ autoplay: true, direction: 'alternate', loop: true });

    paths.forEach(function(path, index) {
      timeline
      .add({
        targets: path.id,
        d: {
          value: path.d,
          duration: 1000,
          easing: 'easeInOutQuad'
        },
        offset: 1000 + 10 * index
      });
    });

    timeline
      .add({
        targets: 'path:first-child',
        opacity: {
          value: 1,
          duration: 1000,
          easing: 'easeInOutQuad'
        },
        offset: 2000 + 10 * paths.length
      });
    //$("#prueba").css("visibility", "visible");
    $("#prueba").addClass("zoomer");
    Meteor.setTimeout(function(){
      $("#prueba").removeClass("zoomer");
      $("#canvas").css("visibility", "hidden");
    }, 5000);
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
      <canvas id="canvas" className="divStyle1"></canvas>
    		<Navbar isLoggedIn={this.state.isLoggedIn} handleLogout={this.handleLogout.bind(this)}> </Navbar>
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
          <div className="divStyle" id="prueba">
            <svg xmlns="http://www.w3.org/2000/svg" width="700" height="600" viewBox="0 0 700 600">
              <path id="path5419" d="m 627.55727,563.46269 -34.09265,-47.72968 39.14342,27.7792 z"/>
              <path id="path4232" d="m 602.30346,512.19745 -8.83884,3.53556 39.14342,27.7792 z"/>
              <path id="path4236" d="m 602.30346,512.19745 -8.83884,3.53556 -1.26268,-35.35533 z"/>
              <path id="path4240" d="m 564.92782,487.19618 28.5368,28.53683 -1.26268,-35.35533 z"/>
              <path id="path4244" d="m 564.92782,487.19618 11.11167,-17.42511 16.16245,10.60661 z"/>
              <path id="path4248" d="m 564.92782,487.19618 11.11167,-17.42511 -22.72842,-7.3236 z"/>
              <path id="path4252" d="m 561.13975,454.11368 14.89974,15.65739 -22.72842,-7.3236 z"/>
              <path id="path4628" d="m 561.13975,454.11368 -6.17169,-8.62832 -1.65699,16.96211 z"/>
              <path id="path4632" d="m 538.28261,426.25654 16.68545,19.22882 -1.65699,16.96211 z"/>
              <path id="path4634" d="m 564.92782,487.19618 -70.67404,-28.1394 59.05729,3.39069 z"/>
              <path id="path4636" d="m 538.49925,425.41047 -44.24547,33.64631 59.05729,3.39069 z"/>
              <path id="path4644" d="m 538.49925,425.41047 -44.24547,33.64631 15.843,-45.89502 z"/>
              <path id="path4646" d="m 435.99925,426.83904 58.25453,32.21774 15.843,-45.89502 z"/>
              <path id="path4648" d="m 435.99925,426.83904 60.75453,-44.56797 13.343,30.89069 z"/>
              <path id="path4656" d="m 435.99925,426.83904 60.75453,-44.56797 -74.51414,21.60498 z"/>
              <path id="path4658" d="m 452.42782,338.9819 44.32596,43.28917 -74.51414,21.60498 z"/>
              <path id="path4660" d="m 452.42782,338.9819 44.32596,43.28917 -10.94271,-34.82359 z"/>
              <path id="path4662" d="m 511.71353,386.12476 -14.95975,-3.85369 -10.94271,-34.82359 z"/>
              <path id="path4672" d="m 452.42782,338.9819 -61.38833,0.43203 31.20015,64.46212 z"/>
              <path id="path4674" d="m 376.71353,406.83904 14.32596,-67.42511 31.20015,64.46212 z"/>
              <path id="path4676" d="m 376.71353,406.83904 -7.10261,29.00346 52.62872,-31.96645 z"/>
              <path id="path4678" d="m 435.28496,425.41047 -65.67404,10.43203 52.62872,-31.96645 z"/>
              <path id="path4688" d="m 376.71353,406.83904 14.32596,-67.42511 -25.22842,-11.25217 z"/>
              <path id="path4690" d="m 376.71353,406.83904 -52.10261,-4.56797 41.20015,-74.10931 z"/>
              <path id="path4692" d="m 376.71353,406.83904 -52.10261,-4.56797 44.05729,34.46212 z"/>
              <path id="path4694" d="m 313.85639,422.55333 10.75453,-20.28226 44.05729,34.46212 z"/>
              <path id="path4704" d="m 318.1421,328.9819 6.46882,73.28917 41.20015,-74.10931 z"/>
              <path id="path4706" d="m 318.1421,328.9819 6.46882,73.28917 -48.08556,-20.53788 z"/>
              <path id="path4708" d="m 313.1421,422.55333 11.46882,-20.28226 -48.08556,-20.53788 z"/>
              <path id="path4729" d="m 313.1421,422.55333 -48.53118,-12.42512 11.91444,-28.39502 z"/>
              <path id="path4731" d="m 318.1421,328.9819 -68.53118,-38.85369 26.91444,91.60498 z"/>
              <path id="path4733" d="m 215.99924,358.26761 33.61168,-68.1394 26.91444,91.60498 z"/>
              <path id="path4735" d="m 215.99924,358.26761 -2.81689,21.8606 63.34301,1.60498 z"/>
              <path id="path4743" d="m 264.57067,410.41047 -51.38832,-30.28226 63.34301,1.60498 z"/>
              <path id="path4747" d="m 264.57067,410.41047 -51.38832,-30.28226 1.20015,17.31927 z"/>
              <path id="path4749" d="m 264.57067,410.41047 -33.53118,16.8606 -16.65699,-29.82359 z"/>
              <path id="path4755" d="m 209.57067,408.9819 21.46882,18.28917 -16.65699,-29.82359 z"/>
              <path id="path4757" d="m 191.71353,396.12476 21.46882,-15.99655 1.20015,17.31927 z"/>
              <path id="path4776" d="m 191.71353,396.12476 21.46882,-15.99655 -42.37128,5.8907 z"/>
              <path id="path4778" d="m 191.71353,396.12476 -12.10261,16.14631 -8.79985,-26.25216 z"/>
              <path id="path4780" d="m 209.57067,408.9819 21.46882,18.28917 -32.37128,3.03355 z"/>
              <path id="path4799" d="m 191.71353,396.12476 -12.10261,16.14631 12.62872,-1.25216 z"/>
              <path id="path4801" d="m 215.99924,358.26761 33.61168,-68.1394 -54.51413,26.60498 z"/>
              <path id="path4818" d="m 197.42781,276.83904 52.18311,13.28917 -54.51413,26.60498 z"/>
              <path id="path4820" d="m 183.85639,428.9819 -4.24547,-16.71083 12.62872,-1.25216 z"/>
              <path id="path4822" d="m 183.85639,428.9819 12.89739,1.14631 -4.51414,-19.1093 z"/>
              <path id="path4824" d="m 209.57068,408.9819 -12.8169,21.14631 -4.51414,-19.1093 z"/>
              <path id="path4858" d="m 183.85639,428.9819 12.89739,1.14631 4.77157,23.03356 z"/>
              <path id="path4860" d="m 183.85639,428.9819 -4.24547,-16.71083 -30.22842,17.31927 z"/>
              <path id="path4862" d="m 183.85639,428.9819 12.1831,38.28917 5.48586,-14.1093 z"/>
              <path id="path4864" d="m 238.1421,468.26761 -42.10261,-0.99654 5.48586,-14.1093 z"/>
              <path id="path4866" d="m 238.1421,468.26761 -42.10261,-0.99654 45.48586,16.60499 z"/>
              <path id="path4878" d="m 183.85639,428.9819 -29.24547,18.64631 -5.22842,-18.03787 z"/>
              <path id="path4880" d="m 121.35639,448.26761 33.25453,-0.6394 -5.22842,-18.03787 z"/>
              <path id="path4961" d="m 121.35639,448.26761 33.25453,-0.6394 -27.72842,13.74784 z"/>
              <path id="path5128" d="m 121.35639,448.26761 5.04024,13.64631 -30.942701,20.53356 z"/>
              <path id="path5130" d="m 121.35639,448.26761 -41.031188,23.28917 15.128727,10.8907 z"/>
              <path id="path5136" d="m 197.42781,276.83904 -24.95974,-1.53226 22.62872,41.42641 z"/>
              <path id="path5138" d="m 197.42781,276.83904 -24.24546,-0.63941 -7.72842,-13.39501 z"/>
              <path id="path5140" d="m 197.42781,276.83904 52.18311,13.28917 -28.08556,-49.10931 z"/>
              <path id="path5142" d="m 197.42781,276.83904 -35.49547,-40.81797 59.59302,4.99783 z"/>
              <path id="path5144" d="m 197.42781,276.83904 -35.31689,-40.81797 3.16444,27.14069 z"/>
              <path id="path5166" d="m 197.42781,276.83904 -35.31689,-40.81797 3.16444,27.14069 z"/>
              <path id="path5168" d="m 142.42781,278.9819 30.75454,-2.78227 -7.72842,-13.39501 z"/>
              <path id="path5170" d="m 142.42781,278.9819 -12.81689,-7.78227 35.84301,-8.39501 z"/>
              <path id="path5172" d="m 162.42781,235.41047 -32.81689,35.78916 35.84301,-8.39501 z"/>
              <path id="path5174" d="m 183.1421,213.26761 -21.20976,22.75346 59.59302,4.99783 z"/>
              <path id="path5176" d="m 183.1421,213.26761 34.50453,2.03917 3.87873,25.71212 z"/>
              <path id="path5186" d="m 183.1421,213.26761 34.50453,2.03917 -9.6927,-23.57359 z"/>
              <path id="path5188" d="m 183.1421,213.26761 9.50453,-30.81797 15.3073,9.28355 z"/>
              <path id="path5190" d="m 183.1421,213.26761 9.50453,-30.81797 -22.54984,15.71212 z"/>
              <path id="path5200" d="m 174.57067,179.69618 18.07596,2.75346 -22.54984,15.71212 z"/>
              <path id="path5202" d="m 174.57067,179.69618 -14.0669,2.75346 9.59302,15.71212 z"/>
              <path id="path5204" d="m 174.57067,179.69618 -14.0669,2.75346 -13.97841,-36.43074 z"/>
              <path id="path5206" d="m 121.71353,176.83904 38.79024,5.6106 9.59302,15.71212 z"/>
              <path id="path5208" d="m 121.71353,176.83904 38.79024,5.6106 -32.54984,-14.28788 z"/>
              <path id="path5258" d="m 121.71353,176.83904 -26.924045,-34.3894 33.164445,25.71212 z"/>
              <path id="path5260" d="m 238.85639,184.33904 -21.20976,30.96774 -9.6927,-23.57359 z"/>
              <path id="path5262" d="m 234.57067,166.4819 -41.92404,15.96774 15.3073,9.28355 z"/>
              <path id="path5270" d="m 234.92782,166.83904 -42.28119,15.6106 11.02159,-40.35931 z"/>
              <path id="path5272" d="m 234.92782,166.83904 -7.63833,-23.3894 -23.62127,-1.35931 z"/>
              <path id="path5286" d="m 234.92782,166.83904 -7.63833,-23.3894 12.8073,3.99783 z"/>
              <path id="path5288" d="m 234.92782,166.83904 -7.63833,-23.3894 -23.62127,-1.35931 z"/>
              <path id="path5296" d="m 234.92782,166.83904 18.07596,-16.24654 -12.90699,-3.14503 z"/>
              <path id="path5298" d="m 278.49925,120.41047 -25.49547,30.18203 -12.90699,-3.14503 z"/>
              <path id="path5306" d="m 234.92782,166.83904 -7.63833,-23.3894 -23.62127,-1.35931 z"/>
              <path id="path5310" d="m 278.49925,120.41047 -9.42404,-6.60368 -28.97842,33.64068 z"/>
              <path id="path5316" d="m 278.49925,120.41047 -9.42404,-6.60368 12.80729,-45.645034 z"/>
              <path id="path5324" d="m 203.14211,141.4819 24.14738,1.96774 -13.26413,-12.0736 z"/>
              <path id="path5341" d="m 233.14211,133.26761 -5.85262,10.18203 -13.26413,-12.0736 z"/>
              <path id="path5343" d="m 203.14211,141.4819 -14.42405,-16.60369 25.3073,6.49783 z"/>
              <path id="path5345" d="m 156.71354,88.267615 32.00452,36.610595 25.3073,6.49783 z"/>
              <path id="path5357" d="m 233.14211,133.26761 -4.78119,-18.03226 -14.33556,16.14069 z"/>
              <path id="path5359" d="m 233.14211,133.26761 -4.78119,-18.03226 12.45015,-6.00217 z"/>
              <path id="path5361" d="m 220.64211,56.481896 7.71881,58.753454 12.45015,-6.00217 z"/>
            </svg>
          </div>
          <button id="clickMe" onClick={this.showAnimation.bind(this)}> clickMe </button>
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