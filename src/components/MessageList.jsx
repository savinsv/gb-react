import React, { useState } from "react";
import "./MessageList.css";

export const MessageList = () => {
  const [messageList, addMessage] = useState([]);
  const faker = require("faker");

  const handleAddMessage = (event) => {
    const messageText = event.target.previousSibling;
    const userName = event.target.previousSibling.previousSibling;
    const messages = Object.assign([], messageList);
    messages.push({
      message_id: faker.datatype.uuid(),
      user: userName.value,
      messageText: messageText.value,
    });
    addMessage(messages);
  };

  return (
    <div>
      <div className="ChatWindow">
        {messageList.map(({ message_id, user, messageText }) => (
          <div key={message_id} className="messageBox">
            <div className="user">{user}</div>
            <div className="message">{messageText}</div>
          </div>
        ))}
      </div>
      <div>
        <input id="userName" placeholder="Введите ваше имя" />
        <input
          id="messageText"
          type="text"
          placeholder="Введите техт сообщения.."
        />
        <input type="button" value="Отправить" onClick={handleAddMessage} />
      </div>
    </div>
  );
};
