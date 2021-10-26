import React, { useState } from "react";
import { v1 } from "uuid";
import GreetingContainer from "./GreetingContainer";

// types
export type UserType = {
  _id: string;
  name: string;
};

// уровень работы с глобальными данными
function HW3() {
  const [users, setUsers] = useState<UserType[]>([]);

  const addUserCallback = (name: string) => {
    const newUser: UserType = { _id: v1(), name };

    setUsers([...users, newUser]);
  };

  return (
    <div className="homework">
      <h2 className="section_title">Homework 3</h2>
      <GreetingContainer
        users={users}
        addUserCallback={addUserCallback}
      />

      <hr />
    </div>
  );
}

export default HW3;
