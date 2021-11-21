import logo from "../images/logo.svg";
import "./App.css";
import { MessageList } from "./MessageList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MessageList />
      </header>
    </div>
  );
}

export default App;
