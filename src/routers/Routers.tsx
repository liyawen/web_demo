import * as React from 'react';
import { Router, Route } from 'react-router-dom'; // Redirect
import { Layout } from 'antd';

import history from './history';
import Navigationbar from './Navigationbar';
import FooterBar from './FooterBar';
import { Path } from './path';
import './css/Routers.css';

import Home from '../components/home';
import SketchToWeb from '../components/sketchToWeb';
import CrossOriginDemo from '../components/crossOriginDemo';

const { Component } = React;
const { Content } = Layout;

export default class Routers extends Component {
  render() {
    let minHeight = document.documentElement.clientHeight || 0;
    return (
      <Layout className="layout layout-wrapper">
        <Router history={history}>
          <div>
            <Navigationbar />

            <Content style={{ minHeight: `${minHeight-130}px` }} className="routes-wrapper">
                {/* <Route path={Path.ROOT} component={Home}>
                  <Route path={} component={HomeDemo} />
                </Route> */}
                {/* <Route exact path={Path.ROOT} render={() => <Redirect to={Path.TRAINING} />} /> */}
              <Route exact path={Path.ROOT} render={() => <Home />} />
              <Route exact path={Path.SKETCH_TO_WEB} render={() => <SketchToWeb />} />
              <Route exact path={Path.CROSS_ORIGIN} render={() => <CrossOriginDemo />} />
            </Content>
    
            <FooterBar />
          </div>
        </Router>
      </Layout>
    );
  }
}
