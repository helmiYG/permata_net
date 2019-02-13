import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
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
                    <Link to="/"><NavLink>{t('Navbar.Beranda')}</NavLink></Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/"><NavLink>{t('Navbar.Limit_Transaksi')}</NavLink></Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/infokurs"><NavLink>{t('Navbar.Info_Kurs')}</NavLink></Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/infokurs"><NavLink>{t('Navbar.Hubungi_Kami')}</NavLink></Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/infokurs"><NavLink>{t('Navbar.Butuh_Bantuan')}</NavLink></Link>
                  </NavItem>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Bahasa
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        Indonesia
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>
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
