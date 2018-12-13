import React from 'react';
import './VerEvento.css';
import Header from '../Header.js';

import TrackerReact from 'meteor/ultimatejs:tracker-react';
import {Events} from '../../api/Events.js';
import {EventsImages} from '../../api/Image.js';
import Navbar from '../Navbar/Navbar.js';

class VerEvento extends TrackerReact(React.Component) {
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
    
    render() {
        let eventoId = FlowRouter.getParam("eventoId");
        eventoId = parseInt(eventoId);
        let eventoObj = Events.findOne({Id: eventoId});
        let imageUrl = '';
        if(EventsImages.findOne({"eventId": eventoId}))
            imageUrl = EventsImages.findOne({"eventId": eventoId}).image;
        if(eventoObj != undefined){
            return (
                <div>
                    <Navbar isLoggedIn={this.state.isLoggedIn} handleLogout={this.handleLogout.bind(this)}> </Navbar>
                    <Header>Eventos</Header>
                    <div className="container contenedor">
                        <br/>
                        <h1 className="TituloVerEvento">{eventoObj.Nombre}</h1>
                        <br/>
                        <div>
                            <img src={imageUrl} width="100%" height="auto" alt="Foto del evento" />
                        </div>
                        <br/>
                        <hr/>
                        <div className="row">
                            <h2 className="titulodescripcion">Descripci&oacute;n del Evento:</h2>
                        </div>
                        <br/>
                        <div className="row container addPadding">
                            <label className="descripciondeevento">{eventoObj.Descripcion}</label>
                        </div>
                        <br/>
                        <hr/>
                        <div className="row">
                            <div className="col alineamiento">
                                <label className="titulodescripcion">Total Recaudado: $</label>
                                <label className="titulodescripcion pad">[0.00]</label>
                                </div>
                        </div>
                        <div className="row">
                            <div className="col alineamiento">
                                <label className="titulodescripcion">Total a Recaudar: $</label>
                                <label className="titulodescripcion pad">[0.00]</label>
                                <label className="fechadeexp" >Evento Hasta: </label>
                                <label> {eventoObj.FechaFinal}</label>
                                </div>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col centrarbotones">
                                <button className="btn btn-secondary "> Realizar Donacion</button>
                                <button className="btn btn-dark"> Ver Facturas</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else
        return (
            <div>
            </div>
        )
    };
}
export default VerEvento;
