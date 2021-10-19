import React from "react";
import Affair from "./Affair";
import { AffairType, AffairsType } from "./HW2";
import css from "./Affairs.module.css";

type AffairsPropsType = {
  // need to fix any
  data: AffairsType;
  setFilter: any;
  deleteAffairCallback: any;
};

function Affairs(props: AffairsPropsType) {
  const mappedAffairs = props.data.map((a: AffairType) => (
    <Affair // should work
      key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
      affair={a}
      deleteAffairCallback={props.deleteAffairCallback}
    />
  ));

  const setAll = () => {}; // need to fix
  const setHigh = () => {};
  const setMiddle = () => {};
  const setLow = () => {};

  return (
    <div className={css.affairs}>
      {mappedAffairs}

      <button onClick={setAll}>All</button>
      <button onClick={setHigh}>High</button>
      <button onClick={setMiddle}>Middle</button>
      <button onClick={setLow}>Low</button>
    </div>
  );
}

export default Affairs;
