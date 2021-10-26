import React, { ChangeEvent } from "react";
import s from "./Greeting.module.css";

type GreetingPropsType = {
  name: string;
  setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void;
  addUser: () => void;
  error: boolean;
  totalUsers: number;
};

const Greeting: React.FC<GreetingPropsType> = ({
  name,
  setNameCallback,
  addUser,
  error,
  totalUsers,
}) => {
  const inputClass = error ? s.error : s.noerror;
  const errorMsg = error ? "Name is required." : "";

  return (
    <div className={s.greeting}>
      <input
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
      <i className={s.error_message}>{errorMsg}</i>
    </div>
  );
};

export default Greeting;
