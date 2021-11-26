import * as React from "react";
import { styled, Box, Paper, Grid } from "@mui/material";
//import { useState } from "react";
import logo from "../images/logo.svg";
import "./App.css";
import { ChatBox } from "./ChatBox/ChatBox";
import { ChatList } from "./ChatList/ChatList";
// import { margin } from "@mui/system";

// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));
// const Box = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   alignItems: "stretch",
//   color: theme.palette.text.secondary,
// }));

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
