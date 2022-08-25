import React from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

class Wizard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
    };

    this.nextStep = this.nextStep.bind(this);
    this.prevStep = this.prevStep.bind(this);
  }

  nextStep() {
    let currentStep = this.state.currentStep;
    currentStep >= 2 ? (currentStep = 3) : currentStep++;

    this.setState({ currentStep: currentStep });
  }

  prevStep() {
    let currentStep = this.state.currentStep;
    currentStep <= 1 ? (currentStep = 1) : currentStep--;

    this.setState({ currentStep: currentStep });
  }

  render() {
    return (
      <div>
        <Step1 currentStep={this.state.currentStep} />
        <Step2 currentStep={this.state.currentStep} />
        <Step3 currentStep={this.state.currentStep} />

        <button onClick={this.prevStep}>Prev</button>
        <button onClick={this.nextStep}>Next</button>
      </div>
    );
  }
}

export default Wizard;
