import React, { Component } from 'react'
import BaseLayout from './BaseLayout'
import Bio from './Bio'
import Tech from './Tech'
import Contact from './Contact'


export default class App extends Component {
  render() {
    return (
      <div>
        <BaseLayout>
          <Bio />
          <Tech />
          <Contact />
        </BaseLayout>
      </div>
    );
  }
}
