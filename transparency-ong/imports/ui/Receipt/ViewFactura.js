import React from 'react';
import './properties.css';
import './properties_responsive.css';

import { Events } from '../../api/Events.js';
import { Factura } from '../../api/Factura.js';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import Header from '../Header.js';
import Navbar from '../Navbar/Navbar.js';

class ViewFactura extends TrackerReact(React.Component) {
    constructor(){
        super();
        var logged = this.logIn();
        this.state = {
            isLoggedIn: logged,
            objetos: [],
        }
    }
    logIn(){
        return Meteor.userId() != null;
    }
    handleLogout(){
        this.setState({isLoggedIn: false});
        Meteor.logout();
        FlowRouter.go('/');
        Bert.alert( 'Adios!', 'info', 'fixed-bottom', 'fa-sign-out' );
    }

    componentDidMount() {
        var objetosArray = Factura.find().fetch();
        console.log(objetosArray);
        this.setState({objetos: objetosArray});
        Meteor.setTimeout(function(){console.log(Factura.find().fetch());}, 1000);
    }

    addEvent() {
    }

    render() {
        let eventoId = FlowRouter.getParam("eventoId");
        eventoId = parseInt(eventoId);
        let objetos = Factura.find().fetch();
        return (
            <div>
                <Navbar isLoggedIn={this.state.isLoggedIn} handleLogout={this.handleLogout.bind(this)}> </Navbar>
                <Header>Factura</Header>
                <div className="container">
                    <div className="properties">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="section_title">{objetos.length} Objetos encontrados</div>
                                    <div className="section_subtitle">Los siguientes</div>
                                </div>
                            </div>
                            <div className="row properties_row">
                                {objetos.map((objeto, i) =>
                                    <div className="col-xl-4 col-lg-6 property_col" key={i}>
                                        <div className="property">
                                            {/*<div className="property_image">
                                                <img src="images/property_1.jpg" alt="">
                                            </div>*/}
                                            <div className="property_body text-center">
                                                <div className="property_title"><a href="">{objeto.Nombre}</a></div>
                                                <div className="property_price">$ {objeto.PrecioUnidad * objeto.Cantidad}</div>
                                            </div>
                                            <div className="property_footer d-flex flex-row align-items-center justify-content-start">
                                                <div><div className="property_icon"><img src="images/icon_1.png" alt=""/></div><span>Cantidad: {objeto.Cantidad}</span></div>
                                                <div><div className="property_icon"><img src="images/icon_2.png" alt=""/></div><span>Precio Unidad: {objeto.PrecioUnidad}</span></div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>
                </div>
            </div>)
    }
}
export default ViewFactura;