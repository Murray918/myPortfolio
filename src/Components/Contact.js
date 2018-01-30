import React, { Component } from 'react';

export default class Contact extends Component {
	render() {
		return (
			<div id="contacts">
				<h4>Name : Andrew Murray</h4>
				<h4>Email : exampleemail@gmail.com</h4>
				<h4>
					GitHub : <a>github.com/example</a>
				</h4>
				<h4>
					LinkedIn : <a>www.linkedin.com/in/example</a>
				</h4>
			</div>
		);
	}
}
