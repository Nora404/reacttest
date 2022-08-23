import React from "react";

class Clock extends React.Component {
    constructor(probs) {
      //braucht immer probs
      super(probs); 
      // muss immer weiter gegeben werden
      this.state = { date: new Date() };
    }
  
    componentDidMount() {
      // Passiert wenn Componente geladen wird
      this.ticker = setInterval(() => this.tick(), 1000);
    }
    tick() {
      this.setState({
        date: new Date(),
      });
    }
  
    componentWillUnmount() {
      //Intervalle IMMER ausräumen
      clearInterval(this.ticker);
    }
  
    
  
    render() {
      return (
        <div>
          <h1>Uhrzeit: {this.state.date.toLocaleTimeString()}</h1>
        </div>
      );
    }
  }


  export default Clock;