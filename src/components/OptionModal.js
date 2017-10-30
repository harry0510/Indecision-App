import React from 'react';
import Modal from 'react-modal';

class OptionModal extends React.Component{
  render(){
    return (
      <Modal
        isOpen={!!this.props.selectedOption}
        contentLabel='Selected option'
        closeTimeoutMS={200}
        onRequestClose={this.props.handleModal}
        className="modal"
      >
          <h3 className="modal__title">Selected option</h3>
          {this.props.selectedOption && <p className="modal__body">{this.props.selectedOption}</p>}
          <button className="button" onClick={this.props.handleModal}>okay</button>
      </Modal>
    );
  }
}

export default OptionModal;
