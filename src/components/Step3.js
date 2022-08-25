import React from "react";

class Step3 extends React.Component {
  render() {
    if (this.props.currentStep !== 3) {
      return null;
    } else {
      return <p>Step 3</p>;
    }
  }
}

export default Step3;
