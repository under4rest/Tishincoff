import React from "react";
import Header from "./../Components/Header/Header";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import UnderConstruct from "./UnderConstruct/UnderConstruct";
import MainScreen from './MainScreen/MainScreen'
import ProductList from "./ProductListScreen/ProductList";

class Screen extends React.Component {
  render() {
    return (
      <Router>
        <div className="overalContainer">
          <Header />
          <Switch>
            <Route exact path="/">
              <MainScreen />
            </Route>
            <Route path="/menu">
              <UnderConstruct />
            </Route>
            <Route path="/shops">
              <ProductList />
            </Route>
            <Route path="/about">
              <UnderConstruct />
            </Route>
            <Route path="/contact">
              <UnderConstruct />
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
