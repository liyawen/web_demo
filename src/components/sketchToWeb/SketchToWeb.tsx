import * as React from 'react';

import Navigator from './Navigator';
import Footer from './Footer';

import './css/SketchToWeb.css';
import banner from './img/banner.jpg';
import logo from './img/logo.png';

const { Component } = React; 

export default class SketchToWeb extends Component {
  render() {
    return (
      <article className="content-wrapper">
        <Navigator />
        <section>
          <div className="banner-wrapper">
            <div className="banner-img"><img height="576" src={banner} alt="header"/></div>
            <div>
              <div className="banner-title">
                <img src={logo} height="115" width="115" alt="logo"/>
                <p>SPRING</p>
                <p>COLLECTION</p>
                <p>- 2018 -</p>
                <button>SHOP THE TREND</button>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </article>
    )
  };
}
