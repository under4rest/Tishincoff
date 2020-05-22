import React from "react";
import Header from "./../Components/Header/Header";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import UnderConstruct from "./UnderConstruct/UnderConstruct";
import MainScreen from './MainScreen/MainScreen'

class Screen extends React.Component {
  render() {
    return (
      <Router>
        <div className="overalContainer">
          <Header />
          <Switch>
            <Route path="/menu">
              <UnderConstruct />
            </Route>
            <Route path="/shops">
              <UnderConstruct />
            </Route>
            <Route path="/coffee">
              <UnderConstruct />
            </Route>
            <Route path="/tea">
              <UnderConstruct />
            </Route>
            <Route path="/staff">
              <UnderConstruct />
            </Route>
            <Route path="/about">
              <UnderConstruct />
            </Route>
            <Route path="/contact">
              <UnderConstruct />
            </Route>
            <Route path="/">
              <MainScreen />
            </Route>
            <Route path="*">
              <h1>Doesn`t exist</h1>
              <h1> 404 not found</h1>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Screen;
