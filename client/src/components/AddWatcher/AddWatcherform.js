import { Field, reduxForm } from "redux-form";
import React, { Component } from "react";
import AddWatcherFeild from "./AddWatcherFeilds";
import AddWatcherDropDown from "./AddWatcherDropDown";
import { withRouter } from "react-router";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../actions";

const typetogetfromAPI = ["perfmon_web04"];
const CONDITION = ["ABOVE", "BELOW", "MEMORY LEAK"];
const ACTION = ["EMAIL", "HEAP DUMP"];

class AdddWatcherForm extends Component {
  async componentDidMount() {
    this.props.fetchIndexes();
    console.log(this.props.indexlist);
  }

  valuefromchild = value => {
    console.log(value);
  };
  renderFeilds() {
    return (
      <div>
        <div>
          <Field
            label="Watcher Name"
            name="watchername"
            component={AddWatcherFeild}
          />

          <Field
            label="Elastic Search Index"
            name="esindex"
            component={AddWatcherDropDown}
            indexes={this.props.indexlist}
            getvaluefromchild={this.valuefromchild}
          />
          <Field
            label="Elastic Search Type"
            name="estype"
            component={AddWatcherDropDown}
            indexes={typetogetfromAPI}
            getvaluefromchild={this.valuefromchild}
          />

          <Field
            label="Condition"
            name="condition"
            component={AddWatcherDropDown}
            indexes={CONDITION}
            getvaluefromchild={this.valuefromchild}
          />
          <Field
            label="Value for Condition"
            name="valuetocheck"
            component={AddWatcherFeild}
          />

          <Field
            label="Action"
            name="action"
            component={AddWatcherDropDown}
            getvaluefromchild={this.valuefromchild}
            indexes={ACTION}
          />

          <Field
            label="Polling Frequency (Seconds)"
            name="polling"
            component={AddWatcherFeild}
          />
        </div>
      </div>
    );
  }
  render() {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit(values =>
            this.props.saveWatcher(values, this.props.history)
          )}
        >
          {this.renderFeilds()}

          <button
            className="btn waves-effect waves-light right red"
            type="submit"
          >
            Create Watcher
            <i className="material-icons right">send</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const error = {};
  if (!values.watchername) {
    error.watchername = "Please provide a Name";
  }
  if (!values.polling) {
    error.polling = "Please provide a Polling Frequency";
  }

  return error;
}

AdddWatcherForm = reduxForm({
  validate,
  form: "AdddWatcherForm"
})(AdddWatcherForm);

function mapStatetoProps({ indexlist }) {
  return { indexlist };
}

AdddWatcherForm = connect(mapStatetoProps, actions)(
  withRouter(AdddWatcherForm)
);

export default AdddWatcherForm;
