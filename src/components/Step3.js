import React from "react";

class Step3 extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    const element = document.getElementById("name");
    this.props.setup("name", element.value);
  }

  render() {
    if (this.props.state.currentStep !== 3) {
      return null;
    } else {
      return (
        <div>
          Step 3<br />
          Name der Variable
          <p />
          <form>
            <input type="text" id="name"></input>
            <button onClick={this.handleChange}>Fertig</button>
          </form>
        </div>
      );
    }
  }
}

export default Step3;
