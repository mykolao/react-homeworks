import React, { useState } from "react";
import SuperEditableSpan from "./common/c4-SuperEditableSpan/SuperEditableSpan";
import SuperButton from "../homework-4/common/c2-SuperButton/SuperButton";
import {
  restoreState,
  saveState,
} from "./localStorage/localStorage";

import css from "./HW6.module.css";

function HW6() {
  const [value, setValue] = useState<string>("");

  const save = () => {
    saveState<string>("editable-span-value", value);
  };
  const restore = () => {
    // setValue()
  };

  return (
    <div className="homework">
      <h2 className="section_title">Homework 6</h2>
      <div className={css.body}>
        <SuperEditableSpan
          value={value}
          onChangeText={setValue}
          spanProps={{
            children: value ? undefined : "enter text...",
          }}
        />
        <div className={css.buttons}>
          <SuperButton onClick={save}>Save</SuperButton>
          <SuperButton onClick={restore}>Restore</SuperButton>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default HW6;
