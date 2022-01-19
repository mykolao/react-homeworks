import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../homework-10/bll/store";
import SuperSelect from "../homework-7/common/c5-SuperSelect/SuperSelect";
import { changeThemeC, Theme } from "./bll/themeReducer";
import s from "./HW12.module.css";

const themes: Theme[] = ["dark", "light", "red"];

function HW12() {
  const dispatch = useDispatch();
  const theme = useSelector<RootState, Theme>(
    (store) => store.theme
  );

  const onSelectChangeHandler = (o: Theme) => {
    dispatch(changeThemeC(o));
  };

  // useDispatch, onChangeCallback

  return (
    <div className="homework">
      <h2 className="section_title">Homework 12</h2>
      <div className={`${s[theme]} ${s.container}`}>
        <span className={s[theme + "-text"]}>Hello 12</span>
        <SuperSelect
          options={themes}
          value={theme}
          onChangeOption={onSelectChangeHandler}
        />
        {/*should work (должно работать)*/}
        {/*SuperSelect or SuperRadio*/}
      </div>
      <hr />
    </div>
  );
}

export default HW12;
