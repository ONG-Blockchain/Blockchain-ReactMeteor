import React from 'react';
import './VerEvento.css';
import Header from '../Header.js';

import TrackerReact from 'meteor/ultimatejs:tracker-react';
import { Events } from '../../api/Events.js';
import { EventsImages } from '../../api/Image.js';
import Navbar from '../Navbar/Navbar.js';
import { Modal, Button } from 'react-bootstrap';

import Web3 from 'Web3'
var Tx = require('ethereumjs-tx');
const web3 = new Web3(Web3.givenProvider || 'https://ropsten.infura.io/26f7aed34a7d4ebaa313a012b016f66c');

class VerEvento extends TrackerReact(React.Component) {
    constructor() {
        super();
        var logged = this.logIn();
        this.state = {
            isLoggedIn: logged,
            show: false,
            tokensDonar:0,
            my_privkey: '5017FE33B8D09792A6755A2236D18118FE8159675EBA85C1C2F3B71F8CB7EDFB',
            myAddress: '0xc3Ba293Ee68A457960F2598D73c0197D29f285D9',
            destAddress: '0x80Fad9325Ccc5E9191632Aa69D81fcE2683D36C3',
            tokensUsuario: 0
        }
        this.getBalance(this.state.myAddress);
    }
    logIn() {
        return Meteor.userId() != null;
    }
    handleLogout() {
        this.setState({ isLoggedIn: false });
        Meteor.logout();
        FlowRouter.go('/');
        Bert.alert('Adios!', 'info', 'fixed-bottom', 'fa-sign-out');
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

    add() {
        this.setState({
            tokensDonar: this.state.tokensDonar + 1,
        });
    }

    sub() {
        if (this.state.tokensDonar === 0) {
            this.setState({
                tokensDonar: 0,
            });
        } else {
            this.setState({
                tokensDonar: this.state.tokensDonar - 1,
            });
        }
    }


    async donateToken(my_privkey, myAddress, destAddress, tokensDonar){
      console.log(`web3 version: ${web3.version}`);

      console.log(myAddress);

      var count = await web3.eth.getTransactionCount(myAddress);
      console.log(`num transactions so far: ${count}`);

      var abiArray = [{
            "constant": true,
            "inputs": [],
            "name": "name",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "type": "function",
            "stateMutability": "view"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_spender",
                    "type": "address"
                },
                {
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [
                {
                    "name": "success",
                    "type": "bool"
                }
            ],
            "payable": false,
            "type": "function",
            "stateMutability": "nonpayable"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "totalSupply",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "type": "function",
            "stateMutability": "view"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_from",
                    "type": "address"
                },
                {
                    "name": "_to",
                    "type": "address"
                },
                {
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [
                {
                    "name": "success",
                    "type": "bool"
                }
            ],
            "payable": false,
            "type": "function",
            "stateMutability": "nonpayable"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "decimals",
            "outputs": [
                {
                    "name": "",
                    "type": "uint8"
                }
            ],
            "payable": false,
            "type": "function",
            "stateMutability": "view"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "version",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "type": "function",
            "stateMutability": "view"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_owner",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
            "outputs": [
                {
                    "name": "balance",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "type": "function",
            "stateMutability": "view"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "symbol",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "type": "function",
            "stateMutability": "view"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_to",
                    "type": "address"
                },
                {
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "transfer",
            "outputs": [
                {
                    "name": "success",
                    "type": "bool"
                }
            ],
            "payable": false,
            "type": "function",
            "stateMutability": "nonpayable"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_spender",
                    "type": "address"
                },
                {
                    "name": "_value",
                    "type": "uint256"
                },
                {
                    "name": "_extraData",
                    "type": "bytes"
                }
            ],
            "name": "approveAndCall",
            "outputs": [
                {
                    "name": "success",
                    "type": "bool"
                }
            ],
            "payable": false,
            "type": "function",
            "stateMutability": "nonpayable"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_owner",
                    "type": "address"
                },
                {
                    "name": "_spender",
                    "type": "address"
                }
            ],
            "name": "allowance",
            "outputs": [
                {
                    "name": "remaining",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "type": "function",
            "stateMutability": "view"
        },
        {
            "inputs": [],
            "payable": false,
            "type": "constructor",
            "stateMutability": "nonpayable"
        },
        {
            "payable": false,
            "type": "fallback",
            "stateMutability": "nonpayable"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "_from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "_to",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "_owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "_spender",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
        }]

      var contractAddress = "0xfc641ca6fd44775a9adb543e4d257818d600c8a1";
      var contract = new web3.eth.Contract(abiArray, contractAddress, { from: myAddress });

      var balance = await contract.methods.balanceOf(myAddress).call();
      console.log(`Balance before send: ${balance}`);

      // I chose gas price and gas limit based on what ethereum wallet was recommending for a similar transaction. You may need to change the gas price!
      var rawTransaction = {
          "from": myAddress,
          "nonce": "0x" + count.toString(16),
          "gasPrice": "0x003B9ACA00",
          "gasLimit": "0x2DC6C0",
          "to": contractAddress,
          "value": "0x0",
          "data": contract.methods.transfer(destAddress, tokensDonar).encodeABI(),
          "chainId": 0x03
      };

      var privKey = new Buffer(my_privkey, 'hex');
      var tx = new Tx(rawTransaction);
      tx.sign(privKey);
      var serializedTx = tx.serialize();

      console.log(`Attempting to send signed tx:  ${serializedTx.toString('hex')}`);
      var receipt = await web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'));
      console.log(`Receipt info:  ${JSON.stringify(receipt, null, '\t')}`);

      balance = await contract.methods.balanceOf(myAddress).call();
      console.log(`Balance after send: ${balance}`);
    }

    async getBalance(myAddress){
        //Para usar en un boton: onClick={this.getBalance.bind(this, this.state.myAddress)}
        var abiArray = [{
            "constant": true,
            "inputs": [],
            "name": "name",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "type": "function",
            "stateMutability": "view"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_spender",
                    "type": "address"
                },
                {
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [
                {
                    "name": "success",
                    "type": "bool"
                }
            ],
            "payable": false,
            "type": "function",
            "stateMutability": "nonpayable"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "totalSupply",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "type": "function",
            "stateMutability": "view"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_from",
                    "type": "address"
                },
                {
                    "name": "_to",
                    "type": "address"
                },
                {
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [
                {
                    "name": "success",
                    "type": "bool"
                }
            ],
            "payable": false,
            "type": "function",
            "stateMutability": "nonpayable"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "decimals",
            "outputs": [
                {
                    "name": "",
                    "type": "uint8"
                }
            ],
            "payable": false,
            "type": "function",
            "stateMutability": "view"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "version",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "type": "function",
            "stateMutability": "view"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_owner",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
            "outputs": [
                {
                    "name": "balance",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "type": "function",
            "stateMutability": "view"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "symbol",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "type": "function",
            "stateMutability": "view"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_to",
                    "type": "address"
                },
                {
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "transfer",
            "outputs": [
                {
                    "name": "success",
                    "type": "bool"
                }
            ],
            "payable": false,
            "type": "function",
            "stateMutability": "nonpayable"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_spender",
                    "type": "address"
                },
                {
                    "name": "_value",
                    "type": "uint256"
                },
                {
                    "name": "_extraData",
                    "type": "bytes"
                }
            ],
            "name": "approveAndCall",
            "outputs": [
                {
                    "name": "success",
                    "type": "bool"
                }
            ],
            "payable": false,
            "type": "function",
            "stateMutability": "nonpayable"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_owner",
                    "type": "address"
                },
                {
                    "name": "_spender",
                    "type": "address"
                }
            ],
            "name": "allowance",
            "outputs": [
                {
                    "name": "remaining",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "type": "function",
            "stateMutability": "view"
        },
        {
            "inputs": [],
            "payable": false,
            "type": "constructor",
            "stateMutability": "nonpayable"
        },
        {
            "payable": false,
            "type": "fallback",
            "stateMutability": "nonpayable"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "_from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "_to",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "_owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "_spender",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
        }]

        var contractAddress = "0xfc641ca6fd44775a9adb543e4d257818d600c8a1";
        var contract = new web3.eth.Contract(abiArray, contractAddress, { from: myAddress });
        var balance = await contract.methods.balanceOf(myAddress).call();
        console.log(`Balance before send: ${balance}`);
        this.setState({ tokensUsuario: balance });
    }

    render() {
        let eventoId = FlowRouter.getParam("eventoId");
        eventoId = parseInt(eventoId);
        let eventoObj = Events.findOne({ Id: eventoId });
        let imageUrl = '';
        if (EventsImages.findOne({ "eventId": eventoId }))
            imageUrl = EventsImages.findOne({ "eventId": eventoId }).image;
        if (eventoObj != undefined) {
            return (
                <div>
                    <Navbar isLoggedIn={this.state.isLoggedIn} handleLogout={this.handleLogout.bind(this)}> </Navbar>
                    <Header>Eventos</Header>
                    <div className="container contenedor">
                        <br />
                        <h1 className="TituloVerEvento">{eventoObj.Nombre}</h1>
                        <br />
                        <div>
                            <img src={imageUrl} width="100%" height="auto" alt="Foto del evento" />
                        </div>
                        <br />
                        <hr />
                        <div className="row">
                            <h2 className="titulodescripcion">Descripci&oacute;n del Evento:</h2>
                        </div>
                        <br />
                        <div className="row container addPadding">
                            <label className="descripciondeevento">{eventoObj.Descripcion}</label>
                        </div>
                        <br />
                        <hr />
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
                        <hr />
                        <div className="row">
                            <div className="col centrarbotones">
                                <button className="btn btn-secondary" onClick={this.showModal.bind(this)}>Donar</button>
                                <button className="btn btn-dark"> Ver Facturas</button>
                            </div>
                        </div>
                    </div>
                    {/* MODAL */}
                    <Modal className={this.state.show ? 'modalVisible' : 'modalNotVisible'} show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header>
                            <Modal.Title>Estas ayudando a una buena causa.</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <label>Total de tus Tokens:</label>
                                        <label>{this.state.tokensUsuario}</label>
                                    </div>
                                    <div className="col tok">
                                        <button className="btn btn-outline-danger" onClick={this.sub.bind(this)}>-</button>
                                        <label>{this.state.tokensDonar}</label>
                                        <button className="btn btn-outline-danger" onClick={this.add.bind(this)}>+</button>
                                    </div>
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button className="btn btn-success" onClick={this.donateToken.bind(this,this.state.my_privkey,this.state.myAddress,this.state.destAddress, this.state.tokensDonar)}>Donar</Button>
                            <Button className="btn btn-danger" onClick={this.handleClose.bind(this)}>Cancelar.</Button>
                        </Modal.Footer>
                    </Modal>
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
