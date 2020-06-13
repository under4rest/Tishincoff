import React from "react";
import Header from "./../Components/Header/Header";
import { connect } from 'react-redux'
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import UnderConstruct from "./UnderConstruct/UnderConstruct";
import MainScreen from './MainScreen/MainScreen'
import ProductList from "./ProductListScreen/ProductList";
import CartScreen from './CartScreen/CartScreen'
import ContactsScreen from './ContactsScreen/ContactsScreen'
import AboutScreen from './AboutScreen/AboutScreen'


class Screen extends React.Component {
  render() {
    const { theme } = this.props
    return (
      <Router>
        <div className={["overalContainer ", theme ? " invert" : null]}>
          <Switch>
            <Route exact path="/">
              <Header bg={false} fixed={true} />
              <MainScreen />
              {/* <UnderConstruct /> */}
            </Route>
            <Route path="/menu">
              <Header bg={false} fixed={true} />
              <ProductList />
            </Route>
            <Route path="/busines">
              <Header bg={false} fixed={true} />
              <ProductList />
            </Route>
            <Route path="/about">
              <Header bg={true} fixed={false} />
              <AboutScreen />
            </Route>
            <Route path="/contact">
              <Header bg={true} fixed={false} />
              <ContactsScreen />
            </Route>
            <Route path="/cart">
              <Header bg={true} fixed={false} />
              <CartScreen />
            </Route>
            <Route path="*">
              <Header bg={true} fixed={false} />
              <UnderConstruct />
            </Route>
          </Switch>
        </div>
      </Router >
    );
  }
}
const mapStateToPorps = (state) => {
  return {
    theme: state.theme,
  }
};

export default connect(mapStateToPorps)(Screen);
