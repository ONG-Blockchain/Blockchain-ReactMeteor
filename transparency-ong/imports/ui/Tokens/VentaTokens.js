import React from 'react';
import { Modal, Button } from 'react-bootstrap';

import './Venta.css';

import Navbar from '../Navbar/Navbar.js';

import Web3 from 'Web3'
var Tx = require('ethereumjs-tx');
const web3 = new Web3(Web3.givenProvider || 'https://ropsten.infura.io/26f7aed34a7d4ebaa313a012b016f66c');

export default class VentaTokens extends React.Component {
    constructor() {
        super();
        var logged = this.logIn();
        this.state = {
            tokens: 0,
            total: (0).toFixed(2),
            show: false,
            isLoggedIn: logged,
            my_privkey: '5017FE33B8D09792A6755A2236D18118FE8159675EBA85C1C2F3B71F8CB7EDFB',
            myAddress: '0xc3Ba293Ee68A457960F2598D73c0197D29f285D9',
            destAddress: '',
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

    componentDidMount(){
        const self = this;
        Meteor.setTimeout(function(){
            self.setState({ destAddress: Meteor.user().profile.public });
        }, 300);
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
                        <Button className="btn btn-success" onClick={this.donateToken.bind(this,this.state.my_privkey,this.state.myAddress,this.state.destAddress, this.state.tokens)}>Comprar</Button>
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