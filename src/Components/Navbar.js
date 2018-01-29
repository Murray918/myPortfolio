import React, { Component } from "react";
// import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div id = 'Navbar'>
        <nav className = "hideNav">
          <div  className = 'container'>
            <div className="row nav-wrap">
              <div className="two columns nav-text">
                <a>Home</a>
              </div>
              <div className="two columns nav-text">
                <a>Bio</a>
              </div>
              <div className="two columns nav-text">
                <a>Tech</a>
              </div>
              <div className="two columns nav-text">
                <a>Contact</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
