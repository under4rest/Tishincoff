import React from "react";
import './Header.css'
import { NavLink, Switch } from 'react-router-dom'
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';

class Header extends React.Component {
  render() {
    return (
      <>
        <Navbar variant="dark" expand="lg" className="header" sticky="top">
          <Navbar.Brand>Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto menu">
              <Nav><NavLink to="/main" activeClassName="selected" className="menu_item" > Главная </NavLink></Nav>
              <Nav><NavLink to="/about" activeClassName="selected" className="menu_item" > О нас </NavLink></Nav>
              <Nav><NavLink to="/contact" activeClassName="selected" className="menu_item" > Контакты </NavLink></Nav>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    )
  };
}

export default Header