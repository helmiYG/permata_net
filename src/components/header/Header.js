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

export default class Header extends Component {
  
    state = {
        isOpen: false
    }
   
      toggle = () => {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
      render() {
        return (
          <div>
            <Navbar fixed="top" color="success" light expand="md">
              <NavbarBrand>PERMATA BANK</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink><Link className='tag-navbar' to="/">Login</Link></NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink><Link className='tag-navbar' to="/infokurs">Info Kurs</Link></NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink><Link className='tag-navbar' to="/beranda">Beranda</Link></NavLink>
                  </NavItem>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle className="tag-navbar" nav caret>
                      Options
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        English
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>
                        Indonesia
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
