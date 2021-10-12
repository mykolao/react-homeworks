import React from "react";
import "./message.css";

type MessageDataType = {
  avatar: string;
  name: string;
  message: string;
  time: string;
};

function Message(props: MessageDataType) {
  return (
    <div className="message">
      <div className="avatar-containter">
        <div className="avatar-bg-low">
          <div className="avatar-bg-high">
            <img src={props.avatar} alt="avatar" className="avatar" />
          </div>
        </div>
      </div>
      <div className="message-body">
        <div className="message-username">{props.name}</div>
        <div className="content-time-container">
          <div className="message-content">{props.message}</div>
          <div className="message-time"><span>{props.time}</span></div>
        </div>
      </div>
    </div>
  );
}

export default Message;
