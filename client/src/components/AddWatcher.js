import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class AddWatcher extends Component {
  componentDidMount() {
    this.props.navigatetoAddWatcher();
  }
  componentWillUnmount() {
    this.props.navigatefromAddWatcher();
  }

  render() {
    return <div>AddWATCHER</div>;
  }
}

export default connect(null, actions)(AddWatcher);
