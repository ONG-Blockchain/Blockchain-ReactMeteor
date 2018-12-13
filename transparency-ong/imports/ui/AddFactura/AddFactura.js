import React from 'react';
import './AddFactura.css';
import '../Login/contact.css';
import '../Login/contact_responsive.css';

import { Factura, FacturaImg, FacturaImages } from '../../api/Factura.js';

class AddFactura extends React.Component {

    changeLabel() {
        var file = $("#fileEvent").get(0).files[0];
        document.getElementById('fileEventLabel').innerHTML = file.name;
    }

    addReceipt() {
        var nombre = $("#nombre").val();
        var precioUnidad = $("#precioUnidad").val();
        var cantidad = $("#cantidad").val();
        var file = $("#fileEvent").get(0).files[0];
        console.log(nombre);
        console.log(precioUnidad);
        console.log(cantidad);

        if (nombre.length > 0) {
            if (precioUnidad.length > 0) {
                if (!isNaN(precioUnidad)) {
                    if (cantidad.length > 0) {
                        if (!isNaN(cantidad)) {
                            if (file) {
                                var idNewEvent = FlowRouter.getParam("eventoId");
                                idNewEvent = parseInt(idNewEvent);
                                var idNewFactura = Factura.find().fetch().length + 1;
                                var fsFile = new FS.File(file);
                                FacturaImg.insert(fsFile, function (err, result) {
                                    if (err) {
                                        console.log(err);
                                    } else {
                                        console.log('idNewEvent = '+idNewEvent );
                                        console.log('idNewFactura = '+idNewFactura );
                                        var imageLoc = '/cfs/files/FacturaImg/'+result._id;
                                        FacturaImages.insert({
                                            eventId: idNewFactura,
                                            image: imageLoc
                                        });
                                        Factura.insert({
                                            Id: idNewFactura,
                                            Nombre: nombre,
                                            EventId: idNewEvent,
                                            PrecioUnidad: precioUnidad,
                                            Cantidad: cantidad
                                        });
                                        Bert.alert('Successfully!', 'success', 'fixed-bottom', 'fa-frown-o');
                                    }
                                });
                            } else
                                Bert.alert('Error\nSeleccione una imagen.', 'danger', 'fixed-bottom', 'fa-frown-o');
                        } else
                            Bert.alert('Error\nIngrese un número válido para la cantidad.', 'danger', 'fixed-bottom', 'fa-frown-o');
                    } else
                        Bert.alert('Error\nIngrese una cantidad.', 'danger', 'fixed-bottom', 'fa-frown-o');
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
                <h1 className="titulo">Agregar a Evento</h1>
                <div>
                    <div className="row">
                        <div>
                            <input type="text" className="contact_input1" id="nombre" placeholder="Nombre" required />
                        </div>
                    </div>
                    <div className="row">
                        <input type="text" className="contact_input" id="precioUnidad" placeholder="PrecioUnidad" />
                    </div>
                    <div className="row">
                        <input type="text" className="contact_input" id="cantidad" placeholder="Cantidad" />
                    </div>
                    <div className="row">
                        <input type="file" className="contact_input posicion inputfile" id="fileEvent" name="fileEvent" accept="image/png,image/jpeg" onChange={this.changeLabel.bind(this)} />
                        <label htmlFor="fileEvent" id="fileEventLabel" className="contact_input centerLabelVerText">Elegir archivo</label>
                    </div>
                    <button className="btn btn-dark centerbutton" height="100px" onClick={this.addReceipt.bind(this)}>Crear</button>
                </div>
            </div>
        );
        return (
            <div className="fondo">
                <div className="container">
                    {CreateEvent}
                </div>
            </div>)
    }
}
export default AddFactura;