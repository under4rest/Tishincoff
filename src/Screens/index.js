import React from "react";
import Header from './../Components/Header/Header'
import { Route, Switch } from 'react-router-dom'
class Screen extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/main">
            <h1>Main</h1>
            <h1> 404 not found</h1>
            <h1> 404 not found</h1>
            <h1> 404 not found</h1>
          </Route>
          <Route path="/about">
            <h1>About</h1>
            <h1> 404 not found</h1>
            <h1> 404 not found</h1>
          </Route>
          <Route path="/contact">
            <h1>Contact</h1>
            <h1> 404 not found</h1>
          </Route>
          <Route path="*">
            <h1>Doesn`t exist</h1>
            <h1> 404 not found</h1>
            <h1> 404 not found</h1>
            <h1> 404 not found</h1>
            <h1> 404 not found</h1>
          </Route>
        </Switch>
      </>
    )
  };
}

export default Screen