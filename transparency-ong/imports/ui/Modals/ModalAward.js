import React from 'react';

import anime from 'animejs';

import Modal from 'react-bootstrap4-modal';


export default class ModalAward extends React.Component {
  modalBackdropClicked(event){
    console.log(event);
    event.handleLogout;
    console.log(this.props);
    this.props.handleLogout;
    console.log(this.props.handleLogout);
    console.log(this);
    console.log(event.target);
  }
  render() {
    return (
      <Modal visible={this.props.show} onClickBackdrop={this.modalBackdropClicked}>
        <div className="modal-header">
          <h5 className="modal-title">Red Alert!</h5>
        </div>
        <div className="modal-body">
          <p>Enemy vessel approaching!</p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" onClick={this.onPanic}>
            Panic
          </button>
          <button type="button" className="btn btn-primary" onClick={this.onFirePhasers}>
            Fire phasers
          </button>
        </div>
      </Modal>
    );
  }
}