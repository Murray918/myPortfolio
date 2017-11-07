import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

export default class BaseLayout extends Component {
  render() {
    return (
      <div >
      <nav className = "hideNav">
        <div className="container">
          <div className="row navWrap">
            <div className="two columns navText">
              <NavLink to='/'>Home</NavLink>
            </div>
            <div className="two columns navText">
              <NavLink to='/Projects'>Projects</NavLink>
            </div>
            <div className="two columns navText">
              <NavLink to='/Bio'>Bio</NavLink>
            </div>
            <div className="two columns navText">
              <NavLink activeClassName="selected" to="Tech">Tech</NavLink>
            </div>
          </div>
        </div>
      </nav>
      <div className ="container siteTainer">
        {this.props.children}
      </div>
    </div>
    );
  }
}
