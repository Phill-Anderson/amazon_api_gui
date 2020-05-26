import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login";
import Books from "./Books";
import BookDetail from "./BookDetail";
import Navbar from "./Navbar";

export default class App extends Component {
  state = {
    token: null,
  };
  handleLogin = (token) => {
    this.setState({ token: token });
    console.log("Logged in ... Token: " + token);
  };
  handleLogOut = () => {
    console.log("logged out ...");
  };
  render() {
    return (
      <Router>
        <Navbar onLogOut={this.handleLogOut} />
        <div className="container">
          <Switch>
            <Route path="/books/:id" component={BookDetail} />
            <Route exact path="/books" component={Books} />
            <Route
              path="/"
              render={() => <Login onLogin={this.handleLogin} />}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}
