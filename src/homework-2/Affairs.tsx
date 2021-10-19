import React from "react";
import Affair from "./Affair";
import { AffairType, AffairsType, FilterType } from "./HW2";
import css from "./Affairs.module.css";

type AffairsPropsType = {
  data: AffairsType;
  setFilter: (filter: FilterType) => void;
  deleteAffairCallback: (_id: number) => void;
};

function Affairs(props: AffairsPropsType) {
  const mappedAffairs = props.data.map((a: AffairType) => (
    <Affair
      key={a._id}
      affair={a}
      deleteAffairCallback={props.deleteAffairCallback}
    />
  ));

  const setAll = () => props.setFilter("all");
  const setHigh = () => props.setFilter("high");
  const setMiddle = () => props.setFilter("middle");
  const setLow = () => props.setFilter("low");

  return (
    <div className={css.affairs}>
      {mappedAffairs}
      <div className={css.buttons}>
        <button className={css.button} onClick={setAll}>
          All
        </button>
        <button className={css.button} onClick={setHigh}>
          High
        </button>
        <button className={css.button} onClick={setMiddle}>
          Middle
        </button>
        <button className={css.button} onClick={setLow}>
          Low
        </button>
      </div>
    </div>
  );
}

export default Affairs;
