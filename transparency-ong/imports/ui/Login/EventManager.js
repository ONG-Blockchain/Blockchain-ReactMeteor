import React from 'react';
import './EventManager.css';
import './contact.css';
import './contact_responsive.css';

class EventManager extends React.Component {
    render() {
        const CreateEvent = (
            <div class="formulario">
                <h1 className="titulo">Crear Evento</h1>
            <div >                
                <div className="row">
                    <div>
                        <input type="text" class="contact_input1" placeholder="Titulo" required />
                    </div>
                </div>
                <div className="row">
                    <input type="text" class="contact_input" placeholder="Meta" />
                </div>
                <div className="row">                   
                    <input type="text" class="contact_input" placeholder="Foto" required />
                    <button className="btn btn-dark  boton"> Buscar</button>                   
                </div>
                <div className="row">                    
                    <input type="date" class="contact_input" required />                    
                </div>
                <div className="row">
                    <textarea class="contact_textarea contact_input" placeholder="Descripcion" required></textarea>
                </div>
               
                
                <button className="btn btn-dark centerbutton">Crear</button>

            </div>
            </div>
        );
        return (
            <div className="container">
                {CreateEvent}
            </div>)
    }
}
export default EventManager;



















