import React from "react";

import { Slider } from "@mui/material";

import styles from "./SuperDoubleRange.module.css";

type SuperDoubleRangePropsType = {
  onChangeRange?: (value: [number, number]) => void;
  min?: number;
  max?: number;
  step?: number;
  values?: [number, number];
};

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = ({
  onChangeRange,
  min,
  max,
  step,
  values,
}) => {
  min = min || 0;
  max = max || 100;
  step = step || 1;
  const minValue = min;
  const maxValue = max;
  let [lowValue, highValue] = values || [minValue, maxValue];

  if (lowValue > highValue) lowValue = highValue;

  const onChangeHandler = (e: Event, value: any) => {
    onChangeRange && onChangeRange(value);
  };

  return (
    <div className={styles.container}>
      <Slider
        {...{ min, max, step }}
        value={[lowValue, highValue]}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default SuperDoubleRange;
