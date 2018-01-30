import React, { Component } from 'react';
// import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
	render() {
		return (
			<div id="Navbar">
				<nav className="hideNav">
					<div className="container">
						<div className="row nav-wrap">
							<div className="two columns nav-text">
								<a>
									<h6>Home</h6>
								</a>
							</div>
							<div className="two columns nav-text">
								<a>
									<h6>Bio</h6>
								</a>
							</div>
							<div className="two columns nav-text">
								<a>
									<h6>Tech</h6>
								</a>
							</div>
							<div className="two columns nav-text">
								<a>
									<h6>Contact</h6>
								</a>
							</div>
						</div>
					</div>
				</nav>
			</div>
		);
	}
}
