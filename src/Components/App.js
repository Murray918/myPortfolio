import React, { Component } from 'react';
import Bio from './Bio'
import Contact from './Contact';
// import Projects from './Projects';
import Tech from './Tech';


export default class App extends Component {
  render() {
    return (
      <div>
        <div>
        <h1> Andrew Murray Software Engeneer </h1>
        </div>
        <Bio />
        <Tech />
        <Contact />
      </div>
    );
  }
}
