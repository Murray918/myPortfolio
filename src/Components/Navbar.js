import React, { Component } from 'react';
// import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
	render() {
		return (
			<div id="navbar">
				<nav className="hideNav">
					<div className="container">
						<div className="row nav-wrap">
							<div className="two columns nav-text">
								<a>
									<h5>Home</h5>
								</a>
							</div>
							<div className="two columns nav-text">
								<a>
									<h5>Bio</h5>
								</a>
							</div>
							<div className="two columns nav-text">
								<a>
									<h5>Tech</h5>
								</a>
							</div>
							<div className="two columns nav-text">
								<a>
									<h5>Contact</h5>
								</a>
							</div>
						</div>
					</div>
				</nav>
			</div>
		);
	}
}
