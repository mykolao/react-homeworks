import React, { ChangeEvent } from "react";
import SuperInputText from "../homework-4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../homework-4/common/c2-SuperButton/SuperButton";
import s from "./Greeting.module.css";

type GreetingPropsType = {
  name: string;
  setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void;
  addUser: () => void;
  error: string;
  totalUsers: number;
};

const Greeting: React.FC<GreetingPropsType> = ({
  name,
  setNameCallback,
  addUser,
  error,
  totalUsers,
}) => {
  // const inputClass = error ? s.error : s.noerror;
  // const errorMsg = error ? "Name is required." : "";

  return (
    <div className={s.greeting}>
      <div className={s.input}>
        <SuperInputText
          value={name}
          onEnter={addUser}
          onChange={setNameCallback}
          error={error}
        ></SuperInputText>
      </div>
      <SuperButton
        disabled={error ? true : false}
        onClick={addUser}
        className={s.button}
      >
        Add
      </SuperButton>
      <span className={s.counter}>{totalUsers}</span>
      {/* <input
        value={name}
        onChange={setNameCallback}
        className={`${s.input} ${inputClass}`}
        placeholder="Enter new name"
      />
      <span>{error}</span>
      <button className={s.button} onClick={addUser}>
        Add
      </button>
      <span className={s.counter}>{totalUsers}</span>
      <i className={s.error_message}>{errorMsg}</i> */}
    </div>
  );
};

export default Greeting;
