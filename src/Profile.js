import React, { Component } from "react";

export default class Profile extends Component {
  state = {
    profile: null,
    error: ""
  };

  componentDidMount() {
    this.loadUserProfile();
  }

  loadUserProfile() {
    this.props.auth.getProfile((profile, error) => {
      this.setState({
        profile,
        error
      });
    });
  }
  render() {
    const profile = this.state;
    if (!profile) return null;
    return (
      <>
        <h1>Profile</h1>
        <p>{profile.nickname}</p>
        <img
          src={profile.picture}
          style={{ maxWidth: "50", maxHeight: "50" }}
          alt=""
        />
        <pre>{JSON.stringify(profile, null, 2)}</pre>
      </>
    );
  }
}
