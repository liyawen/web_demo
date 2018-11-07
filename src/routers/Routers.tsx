import * as React from 'react';
import { Router, Route } from 'react-router-dom'; // Redirect
import { Layout } from 'antd';

import history from './history';
import Navigationbar from './Navigationbar';
import FooterBar from './FooterBar';
import { Path } from './path';

import Home from '../components/home';
import HomeDemo from '../components/homeDemo';

const { Component } = React;
const { Content } = Layout;

export default class Routers extends Component {
  render() {
    return (
      <Layout className="layout">
        <Router history={history}>
          <div>
            <Navigationbar />

            <Content>
                {/* <Route path={Path.ROOT} component={Home}>
                  <Route path={} component={HomeDemo} />
                </Route> */}
                {/* <Route exact path={Path.ROOT} render={() => <Redirect to={Path.TRAINING} />} /> */}
              <Route exact path={Path.ROOT} render={() => <Home />} />
              <Route exact path={Path.HOME_DEMO} render={() => <HomeDemo />} />    
            </Content>
    
            <FooterBar />
          </div>
        </Router>
      </Layout>
      
    );
  }
}
