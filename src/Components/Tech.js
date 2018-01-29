import React, { Component } from "react";
import tech from "../logos/TechDataObj.js";
import ReactModal from "react-modal";

export default class Tech extends Component {
  constructor(props) {
    super(props);

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);

    this.state = {
      // languages : tech,
      language: "I dont think what is here matters",
      showModal: false,
      itemId: 0
    };
  }

  componentDidUpdate() {
    console.log(
      "this is the modal boolean ",
      this.state.showModal,
      "this is the language ",
      this.state.language
    );
    // console.log('this is item id in the state ', this.state.itemId);
  }

  handleOpenModal(event) {
    event.preventDefault();
    let itemId = 0;
    let languageTarg = event.currentTarget.id;
    console.log(itemId);
    console.log(languageTarg);
    this.setState({
      showModal: true,
      language: tech[languageTarg],
      itemId: languageTarg
    });
    // console.log("this logs the target index ", event.currentTarget.id);
    // itemId: event.target
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }
  render() {
    // let indexSVG = this
    let langs = tech.map((lang, index) => {
      tech.id = index;
      // console.log(index);
      // console.log(this);

      return (
        <div
          onClick={this.handleOpenModal}
          id={index}
          className="four columns techInfo"
          key={index}
        >
          {lang.svg}
        </div>
      );
    });
    return (
      <div>
        <ReactModal
          tech={this.state.language}
          isOpen={this.state.showModal}
          contentLabel="thechnology"
        >
          <div id="close-button">
            <button onClick={this.handleCloseModal}>X</button>
          </div>
          <div className = 'row'>
            <div id = 'tech-info' className = 'six columns'>
            <h1 className="modal-header">{tech[this.state.itemId].name}</h1>
            <p>{tech[this.state.itemId].info}</p>
          </div>
          <div className = 'six columns'>
            {tech[this.state.itemId].svg}
          </div>
          </div>
        </ReactModal>
        <div className="row tech-wrap">{langs}</div>
      </div>
    );
  }
}
// tech={this.state.language}
