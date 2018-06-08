import React, { Component } from "react";

class AddwatcherDropDown extends Component {
  generateValues(indexes) {
    return indexes.map(index => {
      return (
        <option key={index} value={index}>
          {index}
        </option>
      );
    });
  }
  sendvaluestoparent = e => {
    this.props.getvaluefromchild(e.target.value);
  };

  render() {
    const { input, label, indexes } = this.props;
    return (
      <div>
        <label>{label}</label>
        <select
          {...input}
          className="browser-default"
          onChange={this.sendvaluestoparent}
        >
          <option />
          {this.generateValues(indexes)}
        </select>
      </div>
    );
  }
}

export default AddwatcherDropDown;
