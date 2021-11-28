import { React, useRef, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { TextField, Stack, Button } from "@mui/material";
import "./ChatBox.css";
import { MessageList } from "../MessageList/MessageList";

const faker = require("faker");

let userName = "Nobody";

const BOT = {
  user: "Bot",
  messaggeText: `Приветствую тебя, ${userName}. Вы, это.. того, самого, не хулиганьте...`,
};
const ME = {
  user: "Andy",
  messageText: "",
};
const message = (user) => {
  return { id: faker.datatype.uuid(), ...user };
};

export const ChatBox = () => {
  const inputMessageRef = useRef();
  // const outputRef = useRef();
  const [messageList, changeMessageList] = useState([]);
  const [outputValue, setOutputValue] = useState("Пока чат пуст...");
  const [inputMessage, setInputMessage] = useState("");

  const handleInpuMessageChange = (event) => {
    setInputMessage(event.currentTarget.value);
  };
  useEffect(() => {
    inputMessageRef.current?.focus();
  });
  const handleClickSendBtn = (event) => {
    const { id, user, messageText } = message(ME);
    changeMessageList([...messageList, { id, user, messageText }]);
    // setOutputValue(inputMessageRef.current.value);
    setInputMessage("");
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": {
          m: 1,
          display: "grid",
          justifyContent: "stretch",
        },
      }}
      id="form"
      noValidate
      autoComplete="off"
    >
      <div>
        <MessageList messageList={messageList} />
        {/* <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={20}
          fullWidth
          defaultValue=""
          value={outputValue}
          outputRef={outputRef}
        /> */}
        <Stack
          direction="row"
          spacing={1}
          sx={{
            display: "grid",
            gridTemplateColumns: "3fr 1fr",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Ваше сообщение"
            variant="outlined"
            autoFocus
            value={inputMessage}
            inputRef={inputMessageRef}
            onChange={handleInpuMessageChange}
          />
          <Button
            id="sendMessageBtn"
            variant="contained"
            disabled={inputMessage.length < 10}
            sx={{ bgcolor: "grey" }}
            onClick={handleClickSendBtn}
          >
            Отправить...
          </Button>
        </Stack>
      </div>
    </Box>
  );
};
