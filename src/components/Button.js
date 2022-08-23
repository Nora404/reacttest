import React from "react";

class Button extends React.Component {
  constructor(probs) {
    //braucht immer probs
    super(probs);
    // muss immer weiter gegeben werden
    this.state = { render: true };
  }

  deleteMe() {
    this.setState({
        render: false
    });
  }

  render() {
    if (this.state.render) {
      return <button onClick={(e) => this.deleteMe(e)}>Delete me</button>;
    } else {
        return null;
    }
  }
}

export default Button;