import React from 'react';
import './VerEvento.css';
import '../Header.js';

class VerEvento extends React.Component {
    render() {
        const evento = (
            <div className="container contenedor">
                <h1 className="TituloVerEvento">[Nombre Evento]</h1>
                <div>
                    <img src="" width="100%" height="480px" alt="Foto del evento" />
                </div>
                <div className="row">
                    <h2 className="titulodescripcion">Descripcion del Evento:</h2>
                </div>
                <div className="row">
                    <label className="descripciondeevento">[Descripcion del Evento]</label>
                </div>
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
                        <label> 00/00/0000</label>
                        </div>
                </div>
                <div className="row">
                    <div className="col centrarbotones">
                        <button className="btn btn-secondary "> Realizar Donacion</button>
                        <button className="btn btn-dark"> Ver Facturas</button>
                    </div>
                </div>
            </div>
        );

        return (
            <div >
                {evento}
            </div>
        )
    };
}
export default VerEvento;
