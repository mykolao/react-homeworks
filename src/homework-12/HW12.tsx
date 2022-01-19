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
    <div className={s[theme]}>
      <hr />
      <span className={s[theme + "-text"]}>homeworks 12</span>

      {/*should work (должно работать)*/}
      {/*SuperSelect or SuperRadio*/}

      <hr />
    </div>
  );
}

export default HW12;
