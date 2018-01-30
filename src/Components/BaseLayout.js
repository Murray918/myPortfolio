import React, { Component } from "react";
import Navbar from "./Navbar";

export default class BaseLayout extends Component {
  render() {
    return (
      <div id="BaseLayout">
        <div>
          <Navbar />
        </div>
        <div className="container site-container">
          <div>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
