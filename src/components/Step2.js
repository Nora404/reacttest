import { type } from "@testing-library/user-event/dist/type";
import React from "react";

class Step2 extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    const element = document.getElementById("value");
    this.props.setup("value", element.value);
  }

  dialog() {
    const typ = this.props.state.typ;

    if (typ === "Number") {
      return (
        <form>
          <label>Number: </label>
          <input type="number" id="value"></input>
        </form>
      );
    }
    if (typ === "String") {
      return (
        <form>
          <label>Text: </label>
          <input type="text" id="value"></input>
        </form>
      );
    }
    if (typ === "Boolean") {
      return (
        <form id="value">
          <label>false: </label>
          <input type="radio" value="false" name="f"></input>
          <br />
          <label>true: </label>
          <input type="radio" value="true" name="t"></input>
        </form>
      );
    }
  }

  render() {
    if (this.props.state.currentStep !== 2) {
      return null;
    } else {
      return (
        <div>
          Step 2<br />
          Wert der Variable
          <p />
          {this.dialog()}
          <button onClick={this.handleChange}>Übermehmen</button>
        </div>
      );
    }
  }
}

export default Step2;
