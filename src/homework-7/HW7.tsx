import React, { useState } from "react";
import SuperSelect from "./common/c5-SuperSelect/SuperSelect";
import SuperRadio from "./common/c6-SuperRadio/SuperRadio";

const arr = ["x", "y", "z"];

function HW7() {
  const [value, onChangeOption] = useState(arr[1]);

  return (
    <div className="homework">
      <h2 className="section_title">Homework 7</h2>
      <div>
        <SuperSelect
          options={arr}
          value={value}
          onChangeOption={onChangeOption}
        />
      </div>
      <div>
        {/* <SuperRadio
          name={"radio"}
          options={arr}
          value={value}
          onChangeOption={onChangeOption}
        /> */}
      </div>
      <hr />
    </div>
  );
}

export default HW7;
