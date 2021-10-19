import React from "react";
import { AffairType } from "./HW2";
import css from "./Affair.module.css";

type AffairPropsType = {
  affair: AffairType;
  deleteAffairCallback: (_id: number) => void;
};

function Affair(props: AffairPropsType) {
  const deleteCallback = () =>
    props.deleteAffairCallback(props.affair._id);

  const priority = props.affair.priority;

  return (
    <div className={css.affair}>
      <div className={css.name}>{props.affair.name}</div>
      <div className={`${css.priority} ${css[priority]}`}>
        {priority}
      </div>
      <button className={css.button} onClick={deleteCallback}>
        X
      </button>
    </div>
  );
}

export default Affair;
