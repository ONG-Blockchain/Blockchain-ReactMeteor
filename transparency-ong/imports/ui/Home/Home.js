import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import './Home.css';

import TrackerReact from 'meteor/ultimatejs:tracker-react';
import Navbar from '../Navbar/Navbar.js';

class Home extends TrackerReact(Component) {
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
    handleLogout(){
        this.setState({isLoggedIn: false});
        Meteor.logout();
        Bert.alert( 'Adios!', 'info', 'fixed-bottom', 'fa-sign-out' );
    }
    render() {
        let nombre;
        if(Meteor.user() != null)
            nombre = Meteor.user().profile.firstname + ' ' + Meteor.user().profile.lastname;
        else
            nombre = '';
        return (
            <div>
                <Navbar isLoggedIn={this.state.isLoggedIn} handleLogout={this.handleLogout.bind(this)}> </Navbar>
                <div className="container">
                    <h2 className="zindex">Bienvenido {nombre}!!!</h2>
                    <h3 className="zindex">Estos son los evento activos, animate a donar: </h3>
                    <div className="row">
                        <div className="col-xl carousels">

                            <Carousel className="carousel">
                                <Carousel.Item className="carouselItem">
                                    <img  alt="900x500" className="carouselItemImg" src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/04/26/14/fix-facebook.jpg?w968"/>
                                    <Carousel.Caption  className="items">
                                        <h3>[NOMBRE DEL EVENTO]</h3>
                                        <p>[DESCRIPCION DEL EVENTO]</p>
                                        <button className="btn btn-secondary">Ver Mas...</button>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item className="carouselItem">
                                    <img  alt="900x500" className="carouselItemImg" src="https://www.betootaadvocate.com/wp-content/uploads/2016/10/stock-photo-model.jpg" />
                                    <Carousel.Caption className="items">
                                        <h3>Second slide label</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item className="carouselItem">
                                    <img  alt="900x500" className="carouselItemImg" src="https://i.kym-cdn.com/photos/images/newsfeed/001/331/500/b16.jpg" />
                                    <Carousel.Caption className="items">
                                        <h3>Third slide label</h3>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        
                        </div>
                    </div>
                </div>
            </div>
        )

        carousel: () => {

        }
    }
}
export default Home;