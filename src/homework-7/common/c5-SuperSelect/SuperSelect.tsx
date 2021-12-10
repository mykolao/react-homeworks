import React, {
  SelectHTMLAttributes,
  DetailedHTMLProps,
  ChangeEvent,
} from "react";

import styles from "./SuperSelect.module.css";

type DefaultSelectPropsType = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

type SuperSelectPropsType = DefaultSelectPropsType & {
  options?: any[];
  onChangeOption?: (option: any) => void;
};

const SuperSelect: React.FC<SuperSelectPropsType> = ({
  options,
  onChange,
  onChangeOption,
  ...restProps
}) => {
  const mappedOptions: any[] =
    options?.map((option, i) => (
      <option key={`${i}${option}`} value={option}>
        {option}
      </option>
    )) || [];

  const onChangeCallback = (
    e: ChangeEvent<HTMLSelectElement>
  ) => {
    const option = e.currentTarget.value;
    onChangeOption && onChangeOption(option);
    onChange && onChange(e);
  };

  return (
    <select
      className={styles.select}
      onChange={onChangeCallback}
      {...restProps}
    >
      {mappedOptions}
    </select>
  );
};

export default SuperSelect;
