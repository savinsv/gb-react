import { useState, useEffect } from "react";
import "./MessageList.css";

export const MessageList = () => {
  const [messageList, changeMessageList] = useState([]);

  const addMessage = (userName, messageText, messList) => {
    const faker = require("faker");
    const messages = Object.assign([], messList);
    messages.push({
      message_id: faker.datatype.uuid(),
      user: userName,
      messageText: messageText,
    });
    return messages;
  };

  const handleAddMessage = (event) => {
    const messageText = event.target.previousSibling.value;
    const userName = event.target.previousSibling.previousSibling.value;
    changeMessageList(addMessage(userName, messageText, messageList));
  };

  useEffect(() => {
    setTimeout(() => {
      if (messageList.length > 0) {
        if (messageList[messageList.length - 1].user !== "Bot") {
          changeMessageList(
            addMessage(
              "Bot",
              `Приветствую тебя, ${
                messageList[messageList.length - 1].user
              }. Не хулигань.`,
              messageList
            )
          );
        }
      }
    }, 1500);
  }, [messageList]);

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
