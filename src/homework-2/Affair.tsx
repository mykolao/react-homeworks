import React from "react";
import { AffairType } from "./HW2";
import css from "./Affairs.module.css";

type AffairPropsType = {
  affair: AffairType; // need to fix any
  deleteAffairCallback: any; // need to fix any
};

function Affair(props: AffairPropsType) {
  const deleteCallback = () =>
    props.deleteAffairCallback(props.affair._id); // need to fix

  return (
    <div className={css.affair}>
      <div className={css.name}>{props.affair.name}</div>
      <div className={css.priority}>
        {props.affair.priority}
      </div>
      <button onClick={deleteCallback}>X</button>
    </div>
  );
}

export default Affair;
