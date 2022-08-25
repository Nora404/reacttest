import logo from "./logo.svg";
import "./App.css";
import Foo from "./components/Foo";
import Clock from "./components/Clock";
import Table from "./components/Table";
import Wizard from "./components/Wizard";

function Welcome(probs) {
  return (
    <h1>
      Hallo {probs.name}, {probs.nachname}
    </h1>
  );
}
const element = <Welcome name="Ina" nachname="Ludwig" />;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {element}
          <Wizard />
        </p>
      </header>
    </div>
  );
}

export default App;
