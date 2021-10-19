import React from "react";
import Message from "./Message";

const messageData = {
  avatar:
    "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",
  name: "Васяныч",
  message: "Приходи на распитие благородных напитков 🧐",
  time: "22:00",
};

function HW1() {
  return (
    <div className="homework">
      <h2 className="section_title">Homework 1</h2>
      <Message
        avatar={messageData.avatar}
        name={messageData.name}
        message={messageData.message}
        time={messageData.time}
      />
      <hr />
    </div>
  );
}

export default HW1;
