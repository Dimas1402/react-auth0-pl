import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    const { isAuthenticated, login } = this.props.auth;
    return (
      <div>
        <h1>Home</h1>
        {isAuthenticated() ? (
          <Link to="/profile">view profile</Link>
        ) : (
          <button onClick={login}>login</button>
        )}
      </div>
    );
  }
}

export default Home;
