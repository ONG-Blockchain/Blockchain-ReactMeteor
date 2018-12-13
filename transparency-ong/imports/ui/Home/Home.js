import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import './Home.css';
//import './bootstrap-3_3_7-min.css';

import TrackerReact from 'meteor/ultimatejs:tracker-react';
import Navbar from '../Navbar/Navbar.js';
import {Events} from '../../api/Events.js';
import {EventsImages} from '../../api/Image.js';

function getImageUrl (evento) {
    if(EventsImages.findOne({"eventId": evento.Id}))
        return EventsImages.findOne({"eventId": evento.Id}).image;
    return;
}

const MyCarousel2 = ({ eventos }) => (
    <div className="root">
        <Carousel className="carousel">
            {eventos.map((evento, i) =>
                <Carousel.Item key={i} className="carouselItem">
                    <span className="thumbnail" href="javascript:void(0)">
                        <img  alt="900x500" className="carouselItemImg" src={getImageUrl(evento)}/>
                        <Carousel.Caption  className="items">
                            <div className="cuadroNegro">
                                <h3>{evento.Nombre}</h3>
                                <p>{evento.Descripcion}</p>
                                <a href={"/verevento/" + evento.Id}><button className="btn btn-secondary">Ver Mas...</button></a>
                                {Meteor.user().profile.admin ? (<a href={"/editeventos/" + evento.Id + "/addfactura"}><button className="btn btn-secondary addMargin">A&ntilde;adir Factura</button></a>) : (<div></div>)}
                            </div>
                        </Carousel.Caption>
                    </span>
                </Carousel.Item>)}
        </Carousel>
    </div>
)

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
        Meteor.setTimeout(function(){FlowRouter.go('/')}, 250);
        Bert.alert( 'Adios!', 'info', 'fixed-bottom', 'fa-sign-out' );
    }
    events(){
        return Events.find().fetch();
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
                    <br/><br/><br/><br/><br/><br/><br/>
                    <h2 className="zindex">Bienvenido {nombre}!!!</h2>
                    <h3 className="zindex">Estos son los evento activos, animate a donar: </h3>
                    <div className="row">
                        <div className="col-xl carousel">

                            <MyCarousel2 eventos={this.events()} />
                        
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