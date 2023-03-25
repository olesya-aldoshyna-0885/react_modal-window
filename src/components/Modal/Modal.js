import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { createPortal } from 'react-dom';
import './Modal.css';

const modalRoot = document.getElementById('#modal-root');

export class Modal extends Component {
    handleKeyDown = (e) => {
         if (e.code === 'Escape') {
                console.log('нажали ESC, закрываем модалку')
                this.props.onClose()
            }
    }

    componentDidMount() {
        console.log('Modal componentDidMount');
        window.addEventListener('keydown', this.handleKeyDown)
    }      

    componentWillUnmount() {
        console.log('Modal componentWillUnmount');
        window.removeEventListener('keydown', this.handleKeyDown)
    }

    handleBackdropClick = (event) => {
        console.log('кликнули по бекдропу');
        console.log('event.target:', event.target);
        console.log('event.currentTarget:', event.currentTarget);
        if (event.target === event.currentTarget) {
            this.props.onClose()
        }
    } 

    render() {
    return createPortal(
      <div className="modal__backdrop" onClick={this.handleBackdropClick}>
        <div className="modal__content">{this.props.children}</div>
      </div>,
      modalRoot,
        );
       
  }
}

 