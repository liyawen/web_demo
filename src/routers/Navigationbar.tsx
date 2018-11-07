import * as React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';

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

  getActiveNav(): NavItemOpts | null {
    for (const navItem of this.navList) {
      if (location.pathname.indexOf(navItem.route) === 0) {
        return navItem;
      }
    }
    return null;
  }

  render() {
    const activeNav = this.getActiveNav();
    console.log('activeNav', activeNav)
    return (
      <Header>
        <img className="logo" src={LogoImg} alt="liyawen" />
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={activeNav ? [activeNav.key] : []}
        >
          {this.navList.map((nav: NavItemOpts) => (
            <MenuItem key={nav.key}>
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
