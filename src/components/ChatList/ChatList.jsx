// import * as React from "react";
import { React, useRef, useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";

export const ChatList = () => {
  const [chatList, setChatList] = useState([
    { id: 1, chatName: "Общий" },
    { id: 2, chatName: "Специальный" },
  ]);
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        position: "relative",
        overflow: "auto",
        maxHeight: "auto",
        "& ul": { padding: 0 },
      }}
      subheader={<li />}
    >
      {/* {[0, 1].map((sectionId) => (
        <li key={`section-${sectionId}`}>
          <ul>
            <ListSubheader>{`I'm sticky ${sectionId}`}</ListSubheader> */}
      {chatList.map(({ id, chatName }) => (
        // <ListItem key={`item-${sectionId}-${item}`}>
        <ListItem key={id}>
          <ListItemText primary={chatName} />
        </ListItem>
      ))}
      {/* </ul>
        </li>
      ))} */}
    </List>
  );
};
