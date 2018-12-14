import React from 'react';
import './EventManager.css';
import './contact.css';
import './contact_responsive.css';

import { Events } from '../../api/Events.js';
import { Images, EventsImages } from '../../api/Image.js';

import Navbar from '../Navbar/Navbar.js';

class EventManager extends React.Component {
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

    changeLabel() {
        var file = $("#fileEvent").get(0).files[0];
        document.getElementById('fileEventLabel').innerHTML = file.name;
    }

    addEvent() {
        var nombre = $("#titulo").val();
        var meta = $("#meta").val();
        var file = $("#fileEvent").get(0).files[0];
        var fechaFinal = $("#fechaFinal").val();
        var descripcion = $("#descripcion").val();
        var publickey = $("#publickey").val();
        console.log(nombre);
        console.log(meta);
        console.log(file);
        console.log(fechaFinal);
        console.log(descripcion);

        var file;
        if ($("#imageUp").get(0) != undefined)
            var file = $("#imageUp").get(0).files[0];

        if (nombre.length > 0) {
            if (meta.length > 0) {
                if (!isNaN(meta)) {
                    if (fechaFinal.length > 0) {
                        if (descripcion.length > 0) {
                            if (publickey.length > 0) {
                                console.log(file);
                                if (file) {
                                    var idNewEvent = Events.find().fetch().length + 1;
                                    var fsFile = new FS.File(file);
                                    Images.insert(fsFile, function (err, result) {
                                        if (err) {
                                            console.log(err);
                                        } else {
                                            console.log(Events.find().fetch());
                                            console.log('idNewEvent = '+idNewEvent );
                                            var imageLoc = '/cfs/files/Images/'+result._id;
                                            EventsImages.insert({
                                                eventId: idNewEvent,
                                                image: imageLoc
                                            });
                                            Events.insert({
                                                Id: idNewEvent,
                                                Nombre: nombre,
                                                Meta: meta,
                                                File: file,
                                                FechaFinal: fechaFinal,
                                                Descripcion: descripcion,
                                                Public: publickey
                                            });
                                            Bert.alert('Successfully!', 'success', 'fixed-bottom', 'fa-frown-o');
                                        }
                                    });
                                } else
                                    Bert.alert('Error\nSeleccione una imagen.', 'danger', 'fixed-bottom', 'fa-frown-o');
                            } else
                                Bert.alert('Error\nIngrese una llave publica.', 'danger', 'fixed-bottom', 'fa-frown-o');
                        } else
                            Bert.alert('Error\nIngrese una descripción.', 'danger', 'fixed-bottom', 'fa-frown-o');
                    } else
                        Bert.alert('Error\nIngrese una fecha final.', 'danger', 'fixed-bottom', 'fa-frown-o');
                } else
                    Bert.alert('Error\nIngrese un número válido para la meta.', 'danger', 'fixed-bottom', 'fa-frown-o');
            } else
                Bert.alert('Error\nIngrese una meta.', 'danger', 'fixed-bottom', 'fa-frown-o');
        } else
            Bert.alert('Error\nIngrese un nombre.', 'danger', 'fixed-bottom', 'fa-frown-o');
    }

    render() {
        const CreateEvent = (
            <div className="formulario">
                <h1 className="titulo">Crear Evento</h1>
                <div>
                    <div className="row">
                        <div>
                            <input type="text" className="contact_input1" id="titulo" placeholder="Titulo" required />
                        </div>
                    </div>
                    <div className="row">
                        <input type="text" className="contact_input" id="meta" placeholder="Meta" />
                    </div>
                    <div className="row">
                        <input type="file" className="contact_input posicion inputfile" id="fileEvent" name="fileEvent" accept="image/png,image/jpeg" onChange={this.changeLabel.bind(this)} />
                        <label htmlFor="fileEvent" id="fileEventLabel" className="contact_input centerLabelVerText">Elegir archivo</label>
                    </div>
                    <div className="row">
                        <input type="date" className="contact_input" id="fechaFinal" required />
                    </div>
                    <div className="row">
                        <textarea className="contact_textarea contact_input" id="descripcion" placeholder="Descripcion" required></textarea>
                    </div>
                    <div className="row">
                        <input type="text" className="contact_input" id="publickey" placeholder="Llave del evento" />
                    </div>
                    <button className="btn btn-dark centerbutton button1" height="100px" onClick={this.addEvent.bind(this)}>Crear</button>
                </div>
            </div>
        );
        return (
            <div className="fondo">
                <Navbar isLoggedIn={this.state.isLoggedIn} handleLogout={this.handleLogout.bind(this)}> </Navbar>
                <div className="container">
                    {CreateEvent}
                </div>
            </div>)
    }
}
export default EventManager;



















