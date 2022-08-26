import React from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

class Wizard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      typ: "Number",
      value: "0",
      name: "Zahl",
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

  changeData(key, data) {
    this.setState({ [key]: data });
  }

  render() {
    return (
      <div class="box">
        <div>
          <Step1 state={this.state} setup={this.changeData.bind(this)} />
          <Step2 state={this.state} setup={this.changeData.bind(this)} />
          <Step3 state={this.state} setup={this.changeData.bind(this)} />
        </div>

        <div class="normal">
          Typ: {this.state.typ}
          <br />
          Wert: {this.state.value}
          <br />
          Name: {this.state.name}
          <br />
        </div>

        <div class="flex">
          <button onClick={this.prevStep}>Prev</button>
          <button onClick={this.nextStep}>Next</button>
        </div>
      </div>
    );
  }
}

export default Wizard;
