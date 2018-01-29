import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import App from "./App";

export default class BaseLayout extends Component {
  render() {
    return (
      <div id="BaseLayout">
        <div>
          <Navbar />
        </div>

        <div className="container site-container">
          <div>
            <App />
          </div>
        </div>
      </div>
    );
  }
}
