import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import AddWatcherForm from "./AddWatcherform";

class AddWatcher extends Component {
  componentDidMount() {
    this.props.navigatetoAddWatcher();
  }

  render() {
    return (
      <div>
        <AddWatcherForm />
      </div>
    );
  }
}

export default connect(null, actions)(AddWatcher);
