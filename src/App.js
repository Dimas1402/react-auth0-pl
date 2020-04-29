import React from "react";
import "./App.css";
import { Route, Redirect } from "react-router-dom";
import Home from "./home";
import Profile from "./Profile";
import Nav from "./Nav";
import Auth from "./Auth/Auth";
import Callback from "./callback";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.auth = new Auth(this.props.history);
  }

  render() {
    return (
      <>
        <Nav auth={this.auth} />
        <Route
          path="/"
          exact
          render={props => <Home auth={this.auth} {...props} />}
        />
        <Route
          path="/callback"
          exact
          render={props => <Callback auth={this.auth} {...props} />}
        />
        <Route
          path="/profile"
          render={props =>
            this.auth.isAuthenticated() ? (
              <Profile auth={this.auth} {...props} />
            ) : (
              <Redirect to="/" />
            )
          }
        />
      </>
    );
  }
}

export default App;
