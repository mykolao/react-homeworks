import React from "react";
import SuperButton from "../../homework-4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../../homework-4/common/c3-SuperCheckbox/SuperCheckbox";

const Request = () => {
  const [checked, setChecked] = React.useState(false);

  const onChecboxChange = () => {
    setChecked((checked) => !checked);
  };

  return (
    <>
      <SuperButton>Button</SuperButton>
      <SuperCheckbox
        checked={checked}
        onChange={onChecboxChange}
      >
        Success
      </SuperCheckbox>
    </>
  );
};

export default Request;
