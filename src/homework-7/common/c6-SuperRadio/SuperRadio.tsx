import React, {
  ChangeEvent,
  InputHTMLAttributes,
  DetailedHTMLProps,
} from "react";

import styles from "./SuperRadio.module.css";

type DefaultRadioPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type SuperRadioPropsType = DefaultRadioPropsType & {
  options?: any[];
  onChangeOption?: (option: any) => void;
};

const SuperRadio: React.FC<SuperRadioPropsType> = ({
  type,
  name,
  options,
  value,
  onChange,
  onChangeOption,
  ...restProps
}) => {
  const onChangeCallback = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const option = e.currentTarget.value;
    onChangeOption && onChangeOption(option);
    onChange && onChange(e);
  };

  const mappedOptions: any[] = options
    ? options.map((o, i) => (
        <label className={styles.input} key={name + "-" + i}>
          <input
            type={"radio"}
            name={name}
            checked={o === value}
            value={o}
            onChange={onChangeCallback}
          />
          <div
            className={`${styles.option} ${
              o === value
                ? styles.selected
                : styles.not_selected
            }`}
          >
            {o}
          </div>
        </label>
      ))
    : [];

  return <div className={styles.radio}>{mappedOptions}</div>;
};

export default SuperRadio;
