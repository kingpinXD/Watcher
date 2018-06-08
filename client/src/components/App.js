import React, { Component } from "react";
import Header from "./header";
import PerfArchive from "./PerfArchive";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import Home from "./Home";
import AddWatcher from "./AddWatcher/AddWatcher";

const Landing = () => <h2>LANDING</h2>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="container">
            <Header />
            <Route exact path="/" component={Landing} />
            <Route path="/watcher_home" component={Home} />
            <Route path="/watcher_add" component={AddWatcher} />
            <Route path="/perf_runs_archive" component={PerfArchive} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
