import React from "react";
import SuperButton from "../../homework-4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../../homework-4/common/c3-SuperCheckbox/SuperCheckbox";
import API from "../dal/RequestsAPI";

const Request = () => {
  const [checked, setChecked] = React.useState(false);
  const [status, setStatus] = React.useState({
    success: false,
    error: false,
    value: "",
  });

  const onButtonClickHandler = () => {
    API.post(checked).then((res) => {
      let newStatus;
      if (res.status === "success") {
        newStatus = {
          success: true,
          error: false,
          value: res.message,
        };
      } else {
        newStatus = {
          success: false,
          error: true,
          value: res.message,
        };
      }

      setStatus(newStatus);
    });
  };

  const onChecboxChangeHandler = () => {
    setChecked((checked) => !checked);
  };

  return (
    <>
      <SuperButton onClick={onButtonClickHandler}>
        Button
      </SuperButton>
      <SuperCheckbox
        checked={checked}
        onChange={onChecboxChangeHandler}
      >
        Success
      </SuperCheckbox>
      {status.success && <div>{status.value}</div>}
      {status.error && <div>{status.value}</div>}
    </>
  );
};

export default Request;
