import React, { useEffect } from "react";
import Header from "./../Components/Header/Header";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import UnderConstruct from "./UnderConstruct/UnderConstruct";
import MainScreen from './MainScreen/MainScreen'
import ProductList from "./ProductListScreen/ProductList";
import CartScreen from './CartScreen/CartScreen'


class Screen extends React.Component {
  render() {
    return (
      <Router>
        <div className="overalContainer">
          <Header />
          <Switch>
            <Route exact path="/">
              {/* <MainScreen /> */}
              <UnderConstruct />
            </Route>
            <Route path="/menu">
              <ProductList />
            </Route>
            <Route path="/busines">
              <ProductList />
            </Route>
            <Route path="/about">
              <UnderConstruct />
            </Route>
            <Route path="/contact">
              <UnderConstruct />
            </Route>
            <Route path="/cart">
              <CartScreen />
            </Route>
            <Route path="*">
              <UnderConstruct />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Screen;
