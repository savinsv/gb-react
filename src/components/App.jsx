import { useState } from "react";
import logo from "../images/logo.svg";
import "./App.css";
import Message from "./Message";

function App() {
  const [value, setValue] = useState("");
  function handleChange(event) {
    setValue(event.target.value);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input
          value={value}
          onChange={handleChange}
          placeholder="Введите ваше имя"
          className="App-input"
        />
        <Message messName={value} className="App-message" />
      </header>
    </div>
  );
}

export default App;
