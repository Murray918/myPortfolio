import React, { Component } from 'react';
import tech from '../logos/TechDataObj.js';
import ReactModal from 'react-modal';

export default class Tech extends Component {
	constructor() {
		super();

		this.handleOpenModal = this.handleOpenModal.bind(this);
		this.handleCloseModal = this.handleCloseModal.bind(this);

		this.state = {
			showModal: false,
			itemId: 0
		};
	}

	componentDidUpdate() {
		console.log(
			'this is the modal boolean ',
			this.state.showModal,
			'this is the language ',
			this.state.language
		);
	}

	handleOpenModal(event) {
		event.preventDefault();
		let languageTarg = event.currentTarget.id;
		console.log(this.state.itemId, ' id');
		console.log(languageTarg, ' target');
		this.setState({
			showModal: true,
			language: tech[languageTarg],
			itemId: languageTarg
		});
	}

	handleCloseModal() {
		this.setState({ showModal: false });
	}
	render() {
		let langs = tech.map((lang, index) => {
			tech.id = index;

			return (
				<div
					onClick={this.handleOpenModal}
					id={index}
					className="four columns techInfo"
					key={index}>
					{lang.svg}
				</div>
			);
		});
		return (
			<div>
				<ReactModal isOpen={this.state.showModal} contentLabel="thechnology">
					<div className="close-button">
						<a onClick={this.handleCloseModal}>X</a>
					</div>

					<div id="tech-info" className="eight columns">
						<div className="four columns">
							<h4 className="modal-header">{tech[this.state.itemId].name}</h4>
							<p>{tech[this.state.itemId].info}</p>
						</div>
						<div className="three columns">
							<h4>Projects</h4>
							<ul>
								<li>party boys</li>
								<li>party boys</li>
								<li>party boys</li>
								<li>party boys</li>
							</ul>
						</div>
						<div className="five columns">{tech[this.state.itemId].svg}</div>
					</div>
				</ReactModal>
				<div className="row tech-wrap">{langs}</div>
			</div>
		);
	}
}
