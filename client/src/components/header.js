import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
  renderControl() {
    switch (this.props.auth) {
      case null:
        return <li />;
      case false:
        return (
          <li>
            <a href="/auth/google">Login</a>
          </li>
        );
      default:
        return [
          this.props.addwatcherpage ? (
            <li key="1" />
          ) : (
            <li key="1">
              <Link className="waves-effect waves-light btn" to="/watcher_add">
                Add Watcher
              </Link>
            </li>
          ),
          <li key="2">
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper teal">
          <Link
            to={this.props.auth ? "/watcher_home" : "/"}
            className="brand-logo"
          >
            Watcher
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down ">
            {this.renderControl()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth, addwatcherpage }) {
  return { auth, addwatcherpage };
}
export default connect(mapStateToProps)(Header);
