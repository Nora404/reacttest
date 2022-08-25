import React from "react";

class Foo extends React.Component {
  constructor(probs) {
    super(probs);
    this.handleAddInput = this.handleAddInput.bind(this);
    this.state = { things: ["Knuddeln"] };
  }

  handleAddInput(e) {
    const input = document.getElementById("input");
    this.addInput(input.value);
  }

  addInput(input) {
    let liste = this.state.things;
    liste.push(input);

    this.setState({
      things: liste,
    });
  }

  render() {
    return (
      <div>
        <label>Was soll ich tun? </label>
        <br></br>
        <input id="input"></input>
        <button onClick={this.handleAddInput}>Hinzufügen</button>
        <br></br>
        Es sind {this.state.things.length} Möglichkeiten vermerkt
      </div>
    );
  }
}

export default Foo;
