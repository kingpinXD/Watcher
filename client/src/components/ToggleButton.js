import React, { Component } from "react";

class ToggleButton extends Component {
  state = { isChecked: !this.props.isActive };
  toggleChange = () => {
    this.setState({
      isChecked: !this.state.isChecked
    });

    this.props.toggleswitch(this.state.isChecked, this.props.watchername);
  };
  render() {
    return (
      <div className="switch">
        <label>
          Off
          {this.props.isActive ? (
            <input
              type="checkbox"
              defaultChecked
              onChange={this.toggleChange}
            />
          ) : (
            <input type="checkbox" onChange={this.toggleChange} />
          )}
          <span className="lever" />
          On
        </label>
      </div>
    );
  }
}

export default ToggleButton;
