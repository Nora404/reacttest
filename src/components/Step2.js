import React from "react";

class Step2 extends React.Component {
  render() {
    if (this.props.currentStep !== 2) {
      return null;
    } else {
      return <p>Step 2</p>;
    }
  }
}

export default Step2;
