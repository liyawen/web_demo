import * as React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

export default class FooterBar extends React.PureComponent {
  render() {
    return (
      <Footer style={{ textAlign: 'center' }}>
        web-demo ©2018 Created by liyawen
      </Footer>
    );
  }
}
