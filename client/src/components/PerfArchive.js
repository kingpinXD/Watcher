import React, { Component } from "react";
import Dropdown from "./AddWatcher/AddWatcherDropDown";

let Values_from_api = [
  { Release: "Spring18", Sprint: "Sp5", Issue: "Drill Through" },
  { Release: "Spring18", Sprint: "Sp5", Issue: "Drill Through" },
  { Release: "Spring18", Sprint: "Sp4", Issue: "Drill Through" },
  { Release: "Winter18", Sprint: "Sp5", Issue: "Drill Through" },
  { Release: "Winter18", Sprint: "Sp4", Issue: "Drill Through" }
];

let Release = ["Spring18", "Winter18"];
class PerfArchive extends Component {
  state = {
    Release: [],
    Sprint: [],
    Issue: [],
    Selected_release: null,
    Selected_sprint: null,
    Selected_issue: null
  };
  componentDidMount() {
    this.setState({
      Release
    });
  }

  fetchRuns = issue => {
    this.setState({
      Selected_issue: issue
    });
  };
  getSprint = release => {
    let Values_to_show = Values_from_api.filter(({ Release }) => {
      return Release === release;
    }).map(value => {
      return value.Sprint;
    });
    let Values_without_duplicates = Array.from(new Set(Values_to_show));
    this.setState({
      Sprint: Values_without_duplicates,
      Selected_release: release
    });
  };

  getIssue = sprint => {
    let Values_to_show = Values_from_api.filter(({ Release, Sprint }) => {
      return Release === this.state.Selected_release && Sprint === sprint;
    }).map(value => {
      return value.Issue;
    });
    let Values_without_duplicates = Array.from(new Set(Values_to_show));
    this.setState({
      Issue: Values_without_duplicates,
      Selected_sprint: sprint
    });
  };
  render() {
    return (
      <div>
        <Dropdown
          label="Release"
          indexes={this.state.Release}
          getvaluefromchild={this.getSprint}
        />
        <Dropdown
          label="Sprint"
          indexes={this.state.Sprint}
          getvaluefromchild={this.getIssue}
        />
        <Dropdown
          label="Issue"
          indexes={this.state.Issue}
          getvaluefromchild={this.fetchRuns}
        />
      </div>
    );
  }
}

export default PerfArchive;
