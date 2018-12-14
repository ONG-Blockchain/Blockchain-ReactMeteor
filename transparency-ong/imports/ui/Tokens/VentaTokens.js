import React from 'react';
import { Modal, Button } from 'react-bootstrap';

import './Venta.css';

import Navbar from '../Navbar/Navbar.js';

export default class VentaTokens extends React.Component {
    constructor() {
        super();
        var logged = this.logIn();
        this.state = {
            tokens: 0,
            total: (0).toFixed(2),
            show: false,
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
    add() {
        this.setState({
            tokens: this.state.tokens + 10,
            total: ((this.state.tokens + 10) * 0.50).toFixed(2)
        });
    }

    sub() {
        if (this.state.tokens === 0) {
            this.setState({
                tokens: 0,
                total: (0).toFixed(2)
            });
        } else {
            this.setState({
                tokens: this.state.tokens - 10,
                total: ((this.state.tokens - 10) * 0.50).toFixed(2)
            });
        }
    }

    showModal() {
        this.setState({
            show: true
        });
    }

    handleClose() {
        this.setState({
            show: false
        })
    }

    render() {
        const market = (
            <div>
                <Navbar isLoggedIn={this.state.isLoggedIn} handleLogout={this.handleLogout.bind(this)}> </Navbar>
                <br/><br/>
                <div className="container container1 contGeneral">
                    <div className="row">
                        <div className="col">
                            <h2>Venta de Tokens.</h2>
                        </div>
                    </div>
                    <div className="container container1 contItem">
                        <div className="row">
                            <div className="col">
                                <img className="imgsize" src="/img/token.png" alt="transparency_token" />
                            </div>
                            <div className="col information">
                                <h3>Transparency</h3>
                                <p>Compra nuestras modenas para poder donar en el sitio!</p>
                                <p>Valor por moneda: $0.50 </p>
                            </div>
                            <div className="col counter">
                                <button className="btn btn-outline-danger" onClick={this.sub.bind(this)}>-</button>
                                <label>{this.state.tokens}</label>
                                <button className="btn btn-outline-danger" onClick={this.add.bind(this)}>+</button>
                            </div>
                        </div>
                        <div className="row final">
                            <label>Total: ${this.state.total} </label>
                            <button className="btn btn-success" onClick={this.showModal.bind(this)}>Comprar</button>
                        </div>
                    </div>
                </div>
                <Modal className={this.state.show ? 'modalVisible' : 'modalNotVisible'} show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header>
                        <Modal.Title>Forma de Pago.</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Para poder realizar la compra de nuestro Tokens es necesario ingresar su tarjeta de credito o debito.</h4>
                        <p>Tarjetas Validas:MasterCard, AMEX, VISA</p>
                        <div className="container container1">
                            <div className="row">
                                <div className="col cardcol">
                                    <img src="http://www.vectorific.com/images/previews/2009-09-24-creditcard_BIG.gif" alt="card_image" className="card"/>
                                </div>
                                <div className="col">
                                    <div className="row">
                                        <div className="col">
                                            <label>Numero de tarjeta:</label>
                                            <input type="text"/>
                                        </div>
                                        <div className="col">
                                            <label>Tarjeta Habiente</label>
                                            <input type="text"/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <label>Fecha Vencimiento</label>
                                            <input type="text"/>
                                        </div>

                                        <div className="col">
                                            <label>CVC</label>
                                            <input type="text"/>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="btn btn-success">Comprar</Button>
                        <Button className="btn btn-danger" onClick={this.handleClose.bind(this)}>Cancelar.</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
        return (
            <div>
                {market}
            </div>
        )
    }
}