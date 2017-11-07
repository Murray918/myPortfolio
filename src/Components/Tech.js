import React, {Component} from 'react';
import tech from '../logos/TechDataObj.js';
import ReactModal from 'react-modal'

export default class Tech extends Component {
  constructor(props) {
    super(props)

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);

    this.state  = {
      language : {},
      showModal : false
    }

  }

  handleOpenModal() {
    this.setState({showModal: true});
    console.log('clicked');
  }

  handleCloseModal() {
    this.setState({showModal: false});
  }

  render() {
    let langs = tech.map((lang, index) => {
      return (
        <div onClick = {this.handleOpenModal} className="four columns techInfo"  key={index}>
          <div value={index}>{lang.svg}</div>
          <ReactModal>
            <button onClick = {this.handleCloseModal}></button>
          </ReactModal>
        </div>
      )
    })
    return (
      <div  className="row techWrap">
        {langs}
      </div>
    );
  }
}
