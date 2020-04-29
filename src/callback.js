import React from "react";

class Callback extends React.Component {
  componentDidMount() {
    if (/access_token|id_token|error/.test(this.props.location.hash)) {
      this.props.auth.handleAuthentication();
    } else {
      throw new Error("Invalid callback URL");
    }
  }
  render() {
    return (
      <div>
        <h1>Loading ...</h1>
      </div>
    );
  }
}

export default Callback;
