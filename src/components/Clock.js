import React from "react";

class Clock extends React.Component {
  constructor(probs) {
    super(probs);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.ticker = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  componentWillUnmount() {
    clearInterval(this.ticker); //Intervalle IMMER ausräumen
  }

  render() {
    return (
      <div>
        <h1>Uhrzeit: {this.probs.match.params.city}</h1>
      </div>
    );
  }
}

export default Clock;
