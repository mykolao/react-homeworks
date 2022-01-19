import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../homework-10/bll/store";
import { Theme } from "./bll/themeReducer";
import s from "./HW12.module.css";

function HW12() {
  // const dispatch = useDispatch();
  const theme = useSelector<RootState, Theme>(
    (store) => store.theme
  );

  console.log(theme);

  // useDispatch, onChangeCallback

  return (
    <div className="homework">
      <h2 className="section_title">Homework 12</h2>
      <div className={`${s[theme]} ${s.container}`}>
        <span className={s[theme + "-text"]}>Hello 12</span>

        {/*should work (должно работать)*/}
        {/*SuperSelect or SuperRadio*/}
      </div>
      <hr />
    </div>
  );
}

export default HW12;
