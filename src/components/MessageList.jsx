import "./MessageList.css";

export const MessageList = ({ mList }) => {
  return (
    <div>
      {mList.map(({ message_id, user, messageText }) => (
        <div key={message_id} className="messageBox">
          <div className="user">{user}</div>
          <div className="message">{messageText}</div>
        </div>
      ))}
    </div>
  );
};
