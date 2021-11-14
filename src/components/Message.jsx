import React from "react";

const Message = (props) => (
    
    (props.messName) ? 
    <div>
        Приветствуем Вас, {props.messName}!
    </div>
    : 
    <div>
        Пока поприветствовать некого, а жаль...
    </div>
);

export default Message;