import React, { Component } from "react";
import { connect } from "react-redux";
import ToggleButton from "./ToggleButton";

import {
  fetchWatchers,
  navigatefromAddWatcher,
  toggleWatchers,
  deleteWatcher
} from "../actions";

class Home extends Component {
  componentDidMount() {
    this.props.navigatefromAddWatcher();
    this.props.fetchWatchers();
  }
  toggleWatcher = (isActive, watchername) => {
    this.props.toggleWatchers(isActive, watchername);
  };
  handleDelete = watchername => {
    this.props.deleteWatcher(watchername);
    this.props.fetchWatchers();
  };

  renderContent() {
    return this.props.watchersList.map(watcher => {
      return (
        <div className="row" key={watcher._id}>
          <div className="col s12 m12">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title left">{watcher.watchername}</span>
                <p>ES INDEX : {watcher.esindex}</p>
                <p>Polling : {watcher.polling}</p>
                <ToggleButton toggleswitch={this.toggleWatcher} {...watcher} />
                <a
                  className="waves-effect waves-light red btn left "
                  onClick={() => {
                    this.handleDelete(watcher.watchername);
                  }}
                >
                  <i className="material-icons left">delete_forever</i>Delete
                </a>
              </div>
              <div className="card-action" />
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div style={{ textAlign: "center" }}>{this.renderContent()}</div>;
  }
}
function mapStatetoProps({ watchersList }) {
  return { watchersList };
}

export default connect(mapStatetoProps, {
  fetchWatchers,
  navigatefromAddWatcher,
  toggleWatchers,
  deleteWatcher
})(Home);
