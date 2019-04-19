import React, { Component } from "react";
import { connect } from "react-redux";

class AdminCard extends Component {
  render() {
    console.log();
    return <div>{JSON.stringify(this.props.user)}</div>;
  }
}

const mapStateToProps = reduxState => {
  return {
    user: reduxState.user
  };
};

export default connect(mapStateToProps)(AdminCard);
