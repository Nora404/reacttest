import logo from "./logo.svg";
import "./App.css";
import Wizard from "./components/Wizard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Wizard />
      </header>
    </div>
  );
}

export default App;
