import React from "react";
import Header from './../Components/Header/Header'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import UnderConstruct from './UnderConstruct/UnderConstruct'

class Screen extends React.Component {
  render() {
    return (
      <Router>
        <div className="overalContainer">
          <Header />
          <Switch>
            <Route path="/">
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
    )
  };
}

export default Screen