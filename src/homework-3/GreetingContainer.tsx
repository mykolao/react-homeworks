import React, { ChangeEvent, useState } from "react";
import Greeting from "./Greeting";
import { UserType } from "./HW3";

type GreetingContainerPropsType = {
  users: UserType[];
  addUserCallback: (n: string) => void;
};

const GreetingContainer: React.FC<GreetingContainerPropsType> =
  ({ users, addUserCallback }) => {
    const [name, setName] = useState<string>("");
    const [error, setError] = useState<boolean>(true);

    const setNameCallback = (
      e: ChangeEvent<HTMLInputElement>
    ) => {
      const val = e.target.value;

      if (val.length) {
        setName(val);
        setError(false);
      } else {
        setName("");
        setError(true);
      }
    };

    const addUser = () => {
      if (name.length) {
        addUserCallback(name);
        setName("");
        alert(`Hello  ${name}`);
      }

      setError(true);
    };

    const totalUsers = users.length;

    return (
      <Greeting
        name={name}
        setNameCallback={setNameCallback}
        addUser={addUser}
        error={error}
        totalUsers={totalUsers}
      />
    );
  };

export default GreetingContainer;
