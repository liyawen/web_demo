import * as React from 'react';

import Navigator from './Navigator';
import Footer from './Footer';

import './css/SketchToWeb.css';

const { Component } = React; 

export default class SketchToWeb extends Component {
  render() {
    return (
      <article className="content-wrapper">
        <Navigator />
        <section>
          sssssdddddddddddddddddddddd
        </section>
        
        <Footer />
      </article>
    )
  };
}
