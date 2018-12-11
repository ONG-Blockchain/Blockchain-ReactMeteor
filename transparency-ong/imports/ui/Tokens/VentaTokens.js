import React from 'react';
import { Modal, Button, OverlayTrigger, Popover, Tooltip } from 'react-bootstrap';

import './Venta.css';

export default class VentaTokens extends React.Component {
    constructor() {
        super()
        this.state = {
            tokens: 0,
            total: (0).toFixed(2),
            show: false
        }
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

    handleClose(){
        this.setState({
            show: false
        })
    }

    render() {
        const popover = (
            <Popover id="modal-popover" title="popover">
              very popover. such engagement
            </Popover>
          );
          const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;
        const market = (
            <div>
                <div className="container contGeneral">
                    <div className="row">
                        <div className="col">
                            <h2>Venta de Tokens.</h2>
                        </div>
                    </div>
                    <div className="container contItem">
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
                <div>
                <Modal className={this.state.show ? 'modalVisible' : 'modalNotVisible'} show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Text in a modal</h4>
                        <p>
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </p>

                        <h4>Popover in a modal</h4>
                        <p>
                            there is a{' '}
                            <OverlayTrigger overlay={popover}>
                                <a href="#popover">popover</a>
                            </OverlayTrigger>{' '}
                            here
            </p>

                        <h4>Tooltips in a modal</h4>
                        <p>
                            there is a{' '}
                            <OverlayTrigger overlay={tooltip}>
                                <a href="#tooltip">tooltip</a>
                            </OverlayTrigger>{' '}
                            here
            </p>

                        <hr />

                        <h4>Overflowing text to show scroll behavior</h4>
                        <p>
                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                            ac consectetur ac, vestibulum at eros.
            </p>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur
                            et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                            auctor.
            </p>
                        <p>
                            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
                            dui. Donec ullamcorper nulla non metus auctor fringilla.
            </p>
                        <p>
                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                            ac consectetur ac, vestibulum at eros.
            </p>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur
                            et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                            auctor.
            </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleClose.bind(this)}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
            </div>
        )
        return (
            <div>
                {market}
            </div>
        )
    }
}