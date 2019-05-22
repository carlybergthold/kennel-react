import React, { Component } from "react"
import Modal from 'react-modal';
import modalStyle from './modal.css'

export default class KennelModal extends Component {
    constructor() {
        super();

        this.state = {
            modalIsOpen: false
        }

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    render() {
        return (
            <div>
            {/* <button onClick={this.openModal}>Open Modal</button> */}
            <Modal
                isOpen={this.state.modalIsOpen}
                onRequestClose={this.closeModal}
                style={modalStyle}
                dialogClassName="modal-40w"
                aria-labelledby="contained-modal-title-vcenter"
                contentLabel='Animal Discharge Modal'
            >
                <h2 className="modal-header" ref={subtitle => this.subtitle = subtitle}>Are sure you want to discharge this animal?</h2>
                <button onClick={this.closeModal}>close</button>
            </Modal>
            </div>
        );
    }
}