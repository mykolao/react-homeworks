import React from "react";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";

function HW11() {
  const [value1, setValue1] = React.useState(0);
  const [value2, setValue2] = React.useState(100);

  const onChangeRangeHandler = (r: number) => {
    setValue1(r);
  };

  const onChangeDoubleRangeHandler = ([low, high]: [
    number,
    number
  ]) => {
    if (low !== value1) setValue1(low);
    else setValue2(high);
  };

  return (
    <div className="homework">
      <h2 className="section_title">Homework 11</h2>

      <div>
        <SuperRange
          onChangeRange={onChangeRangeHandler}
          value={value1}
        />
        <span>{value1}</span>
      </div>
        <SuperDoubleRange
          onChangeRange={onChangeDoubleRangeHandler}
          values={[value1, value2]}
        />
      <div>
        <span>{value1}</span>
        <span>{value2}</span>
      </div>
      <hr />
    </div>
  );
}

export default HW11;
