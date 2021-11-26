import { React, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { TextField, Stack, Button } from "@mui/material";
import "./ChatBox.css";

export const ChatBox = () => {
  const [value, setValue] = useState("Пока чат пуст...");
  const [inputMessage, setInputMessage] = useState("");
  const handleInpuMessageChange = (event) => {
    setInputMessage(event.currentTarget.value);
    event.currentTarget.value.length < 10
      ? console.log(`Мало букаф: ${inputMessage}`)
      : console.log("О, пойдет...");
  };
  const handleChange = (event) => {
    setValue(event.target.value);
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
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={50}
          defaultValue=""
        />
        <Stack
          direction="row"
          spacing={1}
          sx={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Ваше сообщение"
            variant="outlined"
            autoFocus
            value={inputMessage}
            onChange={handleInpuMessageChange}
          />
          <Button
            id="sendMessageBtn"
            variant="contained"
            disabled
            sx={{ bgcolor: "grey" }}
          >
            Отправить...
          </Button>
        </Stack>
      </div>
    </Box>
  );
};
