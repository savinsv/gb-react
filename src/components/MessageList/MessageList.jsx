export const MessageList = (messageList) => {
  return (
    <div>
      {messageList.map(({ id, user, messageText }) => (
        <div key={id} className="messageBox">
          <div className="user">{user}</div>
          <div className="message">{messageText}</div>
        </div>
      ))}
    </div>
  );
};
