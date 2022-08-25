import React from "react";

class Step1 extends React.Component {
  render() {
    if (this.props.currentStep !== 1) {
      return null;
    } else {
      return <p>Step 1</p>;
    }
  }
}

export default Step1;
