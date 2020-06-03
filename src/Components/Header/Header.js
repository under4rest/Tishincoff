import React from "react";
import './Header.css'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap';
import Logo from './Logo.png';
import cart from './../../img/cart.png'

class Header extends React.Component {
  state = {
    toggle: false,
  }
  toggle() {
    this.setState({ toggle: !this.state.toggle })
  }
  render() {
    const { toggle } = this.state
    return (
      <>
        <Navbar variant="dark" expand="xl" className={['header', toggle ? 'toggle' : null]} fixed="top">
          <Navbar.Brand><NavLink to="/"><img src={Logo} alt="ТИШИНКОФФ" className="logo" /></NavLink></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => this.toggle()} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={['menu', toggle ? 'toggle-menu' : null]}>
              <div className="header_center">
                <Nav><NavLink to="menu" activeClassName="selected" className="menu_item" > Меню </NavLink></Nav>
                <Nav><NavLink to="busines" activeClassName="selected" className="menu_item" > Бизнес </NavLink></Nav>
                <Nav><NavLink to="about" activeClassName="selected" className="menu_item" > О нас </NavLink></Nav>
                <Nav><NavLink to="contact" activeClassName="selected" className="menu_item" > Контакты </NavLink></Nav>
              </div>
              <Nav><NavLink to="cart" activeClassName="selected" className="menu_item" > <img src={cart} className='cart_header' alt="корзина" /> </NavLink></Nav>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    )
  };
}

export default Header