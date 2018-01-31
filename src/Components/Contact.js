import React, { Component } from 'react';

export default class Contact extends Component {
	render() {
		return (
			<div id="contacts">
				<h1>Contact Me</h1>
				<hr />
				<h5>Name : Andrew Murray</h5>
				<h5>Email : exampleemail@gmail.com</h5>
				<h5>
					GitHub : <a>github.com/example</a>
				</h5>
				<h5>
					LinkedIn : <a>www.linkedin.com/in/example</a>
				</h5>
			</div>
		);
	}
}
