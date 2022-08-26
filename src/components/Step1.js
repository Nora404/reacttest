import React from "react";

class Step1 extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    const element = document.getElementById("typ");
    this.props.setup("typ", element.value);
  }

  render() {
    if (this.props.state.currentStep !== 1) {
      return null;
    } else {
      return (
        <div>
          Step 1<br />
          Typ der Variable
          <p />
          <form>
            <select
              id="typ"
              name="typ"
              value={this.props.state.typ}
              onChange={this.handleChange}
            >
              <option value="Number">Number</option>
              <option value="String">String</option>
              <option value="Boolean">Boolean</option>
            </select>
          </form>
        </div>
      );
    }
  }
}

export default Step1;
