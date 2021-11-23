import { useState, useEffect } from "react";
import "./App.css";
import { MessageList } from "./MessageList";

function App() {
  const [messageList, changeMessageList] = useState([]);

  const handleAddMessage = (event) => {
    const faker = require("faker");
    const messageText = event.target.previousSibling.value;
    const user = event.target.previousSibling.previousSibling.value;
    const message_id = faker.datatype.uuid();
    changeMessageList([...messageList, { message_id, user, messageText }]);
  };

  useEffect(() => {
    setTimeout(() => {
      if (messageList.length > 0) {
        if (messageList[messageList.length - 1].user !== "Bot") {
          const faker = require("faker");
          changeMessageList([
            ...messageList,
            {
              message_id: faker.datatype.uuid(),
              user: "Bot",
              messageText: `Приветствую тебя, ${
                messageList[messageList.length - 1].user
              }. Вы, это.. того, самого, не хулиганьте...`,
            },
          ]);
        }
      }
    }, 1500);
  }, [messageList]);

  return (
    <div className="App">
      <header className="App-header">
        <div className="ChatWindow">
          <MessageList mList={messageList} />
        </div>
        <div className="App-input-block">
          <input id="userName" placeholder="Введите ваше имя" />
          <input
            id="messageText"
            type="text"
            placeholder="Введите техт сообщения.."
          />
          <input type="button" value="Отправить" onClick={handleAddMessage} />
        </div>
      </header>
    </div>
  );
}

export default App;
