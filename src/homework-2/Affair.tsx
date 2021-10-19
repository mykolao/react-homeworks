import React from "react";
import { AffairType } from "./HW2";

type AffairPropsType = {
  affair: AffairType; // need to fix any
  deleteAffairCallback: any; // need to fix any
};

function Affair(props: AffairPropsType) {
  const deleteCallback = () =>
    props.deleteAffairCallback(props.affair._id); // need to fix

  return (
    <div>
      <div className="name">{props.affair.name}</div>
      <div className="priority">{props.affair.priority}</div>
      <button onClick={deleteCallback}>X</button>
    </div>
  );
}

export default Affair;
