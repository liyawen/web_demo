import * as React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';
import { ClickParam } from 'antd/lib/menu';

import { Path } from './path';
import LogoImg from './img/avatar.jpeg';
import './css/Navigationbar.css';

const { Header } = Layout;
const { PureComponent } = React;
const MenuItem = Menu.Item;

interface NavItemProps {
  route: Path;
  text: string;
  iconKey?: string;
}

type NavItemOpts = NavItemProps & {
  key: string,
  subNav?: NavItemOpts[]
};

const NavName = {
  main: 'main',
  mainDemo: 'mainDemo'
}

export default class Navigationbar extends PureComponent {
  constructor(props: {}) {
    super(props);
    this.handleActiveMenu = this.handleActiveMenu.bind(this);
  }

  navList: NavItemOpts[] = [{
    key: NavName.main,
    route: Path.ROOT,
    text: NavName.main,
    iconKey: 'smile'
  }, {
    key: NavName.mainDemo,
    route: Path.HOME_DEMO,
    text: NavName.mainDemo,
    iconKey: 'meh'
  }];

  state = {
    activeKey: this.navList[0].key,
  };

  componentDidMount() {
    this.getActiveKey();
  }

  handleActiveMenu({key}: ClickParam) {
    this.setState({
      activeKey: key,
    });
  }

  getActiveKey() {
    let activeNav: NavItemOpts | null = null;
    for (const navItem of this.navList) {
      if (location.pathname.indexOf(navItem.route) === 0) {
        activeNav = navItem;
      }
    }
    if (activeNav) {
      this.setState({
        activeKey: activeNav.key
      });
    }
  }

  render() {
    return (
      <Header>
        <img className="logo" src={LogoImg} alt="liyawen" />
        <Menu
          theme="dark"
          mode="horizontal"
          onClick={this.handleActiveMenu}
          selectedKeys={[this.state.activeKey]}
        >
          {this.navList.map((nav: NavItemOpts) => (
            <MenuItem className="menu-item-wrapper" key={nav.key}>
              <Link to={nav.route}>
                {nav.iconKey && <Icon type={nav.iconKey} theme="outlined" />}
                {nav.text}
              </Link>
            </MenuItem>
          ))}
        </Menu>
      </Header>
    );
  }
}
