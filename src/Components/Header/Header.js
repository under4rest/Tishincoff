import React from "react";
import './Header.css'
import { NavLink, Switch } from 'react-router-dom'

class Header extends React.Component {
  render() {
    return (
      <>
        <div className="header" >
          <div className="logo" >
            <h1 > This is a Logo </h1>
          </div>
          <div className="menu">
            <NavLink to="/main" activeClassName="selected" className="menu_item" > Главная </NavLink>
            <NavLink to="/about" className="menu_item" > О нас </NavLink>
            <NavLink to="/contact" className="menu_item" > Контакты </NavLink>
          </div>
        </div>
      </>
    )
  };
}

export default Header