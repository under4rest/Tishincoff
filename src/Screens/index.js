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
            <Route exact path="/">
              <MainScreen />
            </Route>
            <Route path="/menu">
              <UnderConstruct data={this.props.data} addToCart={this.props.addToCart}/>
            </Route>
            <Route path="/shops">
              <UnderConstruct />
            </Route>
            <Route path="/about">
              <UnderConstruct />
            </Route>
            <Route path="/contact">
              <UnderConstruct />
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
