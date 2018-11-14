import * as React from 'react';

import './css/Navigator.css';

const { Component } = React;

interface INavState {
  activeKey: string;
  currentKey: string;
}

export default class Navigator extends Component<{}, INavState> {
  constructor(props: {}) {
    super(props);
    // this.handleFocusNav = this.handleFocusNav.bind(this);
    this.state = {
      activeKey: '',
      currentKey: 'ASIA_FASHION',
    }
  }

  navsArr = [{
    key: 'HOME',
    title: 'HOME',
  }, {
    key: 'SHOP',
    title: 'SHOP',
  }, {
    key: 'ASIA_FASHION',
    title: 'ASIA FASHION',
  }, {
    key: 'SOCIAL',
    title: 'SOCIAL',
  }, {
    key: 'CONTACT',
    title: 'CONTACT',
  }];

  handleFocusNav(navKey: string) {
    console.log(navKey)
    this.setState({
      activeKey: navKey
    });
  }

  render() {
    const { currentKey, activeKey } = this.state;
    return (
      <header className="header-wrapper">
        <ul className="nav-wrapper">
          {this.navsArr.map(nav => {
            let className = ['nav-item'];
            if (nav.key === currentKey) {
              className = className.concat('nav-current');
            // } else if (nav.key === activeKey) {
            //   className = className.concat('nav-active');
            }
            return (<li className={className.join(' ')} onMouseOver={this.handleFocusNav.bind(this, nav.key)} key={nav.key}>{nav.title}</li>)
          })}
        </ul>
      </header>
    )
  };
}