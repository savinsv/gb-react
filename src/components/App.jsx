import * as React from "react";
import "./App.css";
import { ChatBox } from "./ChatBox/ChatBox";
import { ChatList } from "./ChatList/ChatList";

const App = () => {
  return (
    <div className="App">
      <header className="Header">MenuBar</header>
      <div className="ChatList">
        <ChatList />
      </div>
      <div className="ChatBox">
        <ChatBox />
      </div>
      <footer className="Status">Status</footer>
    </div>
  );
};

export default App;
