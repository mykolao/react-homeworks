import React, { CSSProperties } from "react";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";

const rangeContainerStyles: CSSProperties = {
  margin: "0 12px",
  display: "flex",
  alignItems: "center",
  gap: "12px",
};

const labelStyles: CSSProperties = {
  fontSize: "1.2rem",
  fontWeight: "bold",
  color: "var(--color-violet)",
};

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

      <div style={rangeContainerStyles}>
        <SuperRange
          onChangeRange={onChangeRangeHandler}
          value={value1}
        />
        <span style={labelStyles}>{value1}</span>
      </div>
      <div style={rangeContainerStyles}>
        <SuperDoubleRange
          onChangeRange={onChangeDoubleRangeHandler}
          values={[value1, value2]}
        />
        <div>
          <span style={labelStyles}>{value1}</span>
          <span style={{ ...labelStyles, marginLeft: "6px" }}>
            {value2}
          </span>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default HW11;
