import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavLink,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom'

import { withRouter } from 'react-router'

import './Header.css'
import { withTranslation } from 'react-i18next';
class Header extends Component {
  
    state = {
        isOpen: false
    }
   
      toggle = () => {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

      actionLanguage = (lang) => {
        this.props.i18n.changeLanguage(lang);
      }

      logout = () => {
        localStorage.removeItem('token')
        this.props.history.push('/')
      }

      render() {
        const { t } = this.props;
        
        let navItem = (
          <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink><Link className="tag-navbar" to="/">{t('Navbar.Beranda')}</Link></NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink><Link className="tag-navbar" to="limittransaksi">{t('Navbar.Limit_Transaksi')}</Link></NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink><Link className="tag-navbar" to="/infokurs">{t('Navbar.Info_Kurs')}</Link></NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink><Link className="tag-navbar" to="#">{t('Navbar.Hubungi_Kami')}</Link></NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink><Link className="tag-navbar" to="#">{t('Navbar.Butuh_Bantuan')}</Link></NavLink>
                  </NavItem>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle className="tag-navbar" nav caret>
                      BAHASA
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem onClick={() => this.actionLanguage('id')}>
                       Indonesia
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem onClick={() => this.actionLanguage('en')}>
                        English
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
        )
        if ( localStorage.getItem('token') ) {
          navItem = (
            <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink><Link className="tag-navbar" to="/">{t('Navbar.Beranda')}</Link></NavLink>
                  </NavItem>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle className="tag-navbar" nav caret>
                      BAHASA
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem onClick={() => this.actionLanguage('id')}>
                       Indonesia
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem onClick={() => this.actionLanguage('en')}>
                        English
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <NavItem>
                    {/* <button onClick={() => this.logout()}>hahah</button> */}
                    <NavLink><Link className="tag-navbar" to="#" onClick={() => this.logout()} >LOGOUT</Link></NavLink>
                  </NavItem>
                </Nav>
          )
        }
        return (
            <Navbar fixed="top" color="success" light expand="md">
              <NavbarBrand>PERMATA BANK</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                {navItem}
              </Collapse>
            </Navbar>
        );
      }
}

export default withRouter(withTranslation('common')(Header))
