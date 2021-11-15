import React from "react";
import './Message.css';

const Message = (props) => (
    
    (props.messName) ? 
    <div className="Message-text-good">
        Приветствуем Вас, {props.messName}!
    </div>
    : 
    <div className="Message-text-non">
        Пока поприветствовать некого, а жаль...
    </div>
);

export default Message;