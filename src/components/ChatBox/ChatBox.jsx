import { React, useRef, useState, useEffect } from "react";
import { TextField, Stack, Button, Box } from "@mui/material";
import "./ChatBox.css";
import { MessageList } from "../MessageList/MessageList";

const faker = require("faker");

const BOT = {
  user: "Bot",
  messageText: `Приветствую тебя, Nobody. Вы, это.. того, самого, не хулиганьте...`,
};
const ME = {
  user: "Andy",
  messageText: "",
};
const message = (user) => {
  return {
    id: faker.datatype.uuid(),
    user: user.user,
    messageText: user.messageText,
  };
};
const getLastMessageUser = (messageArray) => {
  return messageArray.length > 0
    ? messageArray[messageArray.length - 1].user
    : "Bot";
};

export const ChatBox = () => {
  const inputMessageRef = useRef();
  const [messageList, changeMessageList] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  const handleInpuMessageChange = (event) => {
    setInputMessage(event.currentTarget.value);
  };
  useEffect(() => {
    inputMessageRef.current?.focus();
  });
  useEffect(() => {
    let timer_id = null;
    clearTimeout(timer_id);

    if (getLastMessageUser(messageList) !== "Bot") {
      timer_id = setTimeout(() => {
        BOT.messageText = BOT.messageText.replace(
          "Nobody",
          getLastMessageUser(messageList)
        );
        const { id, user, messageText } = message(BOT);
        changeMessageList([...messageList, { id, user, messageText }]);
      }, 1500);
    }
  }, [messageList]);

  const handleClickSendBtn = (event) => {
    event.preventDefault();
    ME.messageText = inputMessageRef.current.value;
    const { id, user, messageText } = message(ME);
    changeMessageList([...messageList, { id, user, messageText }]);
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
            disabled={inputMessage.length < 2}
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
