import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom'

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
        console.log(lang);
        // const { i18n } = this.props;
        // const { value } = lang;
        // i18n.changeLanguage(value);
        this.props.i18n.changeLanguage(lang);
      }

      render() {
        const { t } = this.props;
        return (
          <div>
            <Navbar fixed="top" color="success" light expand="md">
              <NavbarBrand>PERMATA BANK</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <Link to="/">{t('Navbar.Beranda')}</Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/">{t('Navbar.Limit_Transaksi')}</Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/infokurs">{t('Navbar.Info_Kurs')}</Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/infokurs">{t('Navbar.Hubungi_Kami')}</Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/infokurs">{t('Navbar.Butuh_Bantuan')}</Link>
                  </NavItem>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Bahasa
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
              </Collapse>
            </Navbar>
          </div>
        );
      }
}

export default withTranslation('common')(Header);
