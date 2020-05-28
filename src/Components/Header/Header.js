import React from "react";
import './Header.css'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap';
import Logo from './Logo.png';

class Header extends React.Component {
  state= {
    toggle: false,
  }
  toggle() {
    this.setState({toggle: !this.state.toggle})
  }
  render() {
    const {toggle} = this.state
    return (
      <>
        <Navbar variant="dark" expand="xl" className={['header', toggle ? 'toggle' : null]} sticky="top">
          <Navbar.Brand><NavLink to="/"><img src={Logo} alt="ТИШИНКОФФ" className="logo" /></NavLink></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => this.toggle()} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={['ml-auto menu', toggle ? 'toggle-menu' : null]}>
              <Nav><NavLink to="menu" activeClassName="selected" className="menu_item" > Меню </NavLink></Nav>
              <Nav><NavLink to="shops" activeClassName="selected" className="menu_item" > Магазин </NavLink></Nav>
              <Nav><NavLink to="coffee" activeClassName="selected" className="menu_item" > Кофе </NavLink></Nav>
              <Nav><NavLink to="tea" activeClassName="selected" className="menu_item" > Чай </NavLink></Nav>
              <Nav><NavLink to="staff" activeClassName="selected" className="menu_item" > Оборудование </NavLink></Nav>
              <Nav><NavLink to="about" activeClassName="selected" className="menu_item" > О нас </NavLink></Nav>
              <Nav><NavLink to="contact" activeClassName="selected" className="menu_item" > Контакты </NavLink></Nav>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    )
  };
}

export default Header