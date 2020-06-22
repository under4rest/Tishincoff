import React from "react";
import './Header.css'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { themeSwitch } from '../../Redux/actions/addToCart'
import Logo from './Logo.png';
import cart from './../../img/cart.png'
import moon from './../../img/Moon.svg'


class Header extends React.Component {
  state = {
    toggle: false,
    navExpanded: false,
  }

  count() {
    const { cart } = this.props
    let cunt = 0
    cart.forEach(item => {
      cunt += item.good_count
    });
    return cunt
  }

  toggle() {
    this.setState({ toggle: !this.state.toggle })
  }
  settoggle() {
    this.setState({ toggle: false });
  }
  themeToggle() {
    const { theme, themeSwitch } = this.props
    themeSwitch(!theme);
  }
  render() {
    const { bg, fixed } = this.props;
    const { toggle } = this.state
    return (
      <>
        <Navbar variant="dark" expanded={toggle} expand="xl" className={['header', toggle ? 'toggle' : null, fixed ? 'fixed-top' : null, bg ? 'header_bg' : null]} >
          <Navbar.Brand><NavLink to="/" onClick={() => { this.settoggle() }} ><img src={Logo} alt="ТИШИНКОФФ" className="logo" /></NavLink></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => this.toggle()} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={['menu', toggle ? 'toggle-menu' : null]}>
              <div className="header_center">
                <Nav><NavLink to="menu" activeClassName="selected" className="menu_item" onClick={() => { this.settoggle() }}> Меню </NavLink></Nav>
                <Nav><NavLink to="busines" activeClassName="selected" className="menu_item" onClick={() => { this.settoggle() }}> Бизнес </NavLink></Nav>
                <Nav><NavLink to="about" activeClassName="selected" className="menu_item" onClick={() => { this.settoggle() }}> О нас </NavLink></Nav>
                <Nav><NavLink to="contact" activeClassName="selected" className="menu_item" onClick={() => { this.settoggle() }}> Контакты </NavLink></Nav>
              </div>
              <img src={moon} className="brand_logo" onClick={() => this.themeToggle()} />
              <Nav><NavLink to="cart" activeClassName="selected" className="menu_item" onClick={() => { this.settoggle() }}>
                <img src={cart} className='cart_header' alt="корзина" />
                <div className="sum">{this.count()}</div>
                </NavLink></Nav>
            </Nav>
          </Navbar.Collapse>
          {/* <p>{window.innerWidth}</p> */}
        </Navbar>
      </>
    )
  };
}
const mapStateToPorps = (state) => {
  return {
    theme: state.theme,
    cart: state.cart,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    themeSwitch: (e) => dispatch(themeSwitch(e)),
  }
}

export default connect(mapStateToPorps, mapDispatchToProps)(Header)