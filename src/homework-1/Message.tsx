import React from "react";
// import "./message.css";
import css from "./Message.module.css"

type MessageDataType = {
  avatar: string;
  name: string;
  message: string;
  time: string;
};

const Message: React.FC<MessageDataType> = (props) => {
  return (
    <div className={css.message}>
      <div className={css.avatar_containter}>
        <div className={css.avatar_bg_low}>
          <div className={css.avatar_bg_high}>
            <img src={props.avatar} alt="avatar" className={css.avatar} />
          </div>
        </div>
      </div>
      <div className={css.message_body}>
        <div className={css.message_username}>{props.name}</div>
        <div className={css.content_time_container}>
          <div className={css.message_content}>{props.message}</div>
          <div className={css.message_time}><span>{props.time}</span></div>
        </div>
      </div>
    </div>
  );
}

export default Message;
