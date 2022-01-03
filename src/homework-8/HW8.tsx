import React, { useState } from "react";
import SuperButton from "../homework-4/common/c2-SuperButton/SuperButton";
import {
  homeWorkReducer,
  sortUp as sortUpAC,
  sortDown as sortDownAC,
  checkAge as checkAgeAC,
} from "./bll/homeWorkReducer";

import styles from "./HW8.module.css";

export type UserType = {
  _id: number;
  name: string;
  age: number;
};

const initialPeople: UserType[] = [
  { _id: 0, name: "Кот", age: 3 },
  { _id: 1, name: "Александр", age: 66 },
  { _id: 2, name: "Коля", age: 16 },
  { _id: 3, name: "Виктор", age: 44 },
  { _id: 4, name: "Дмитрий", age: 40 },
  { _id: 5, name: "Ирина", age: 55 },
];

function HW8() {
  const [people, setPeople] =
    useState<UserType[]>(initialPeople);

  const finalPeople = people.map((p: UserType) => (
    <div className={styles.user} key={p._id}>
      <div className={styles.name}>{p.name}</div>
      <div className={styles.age}>{p.age}</div>
    </div>
  ));

  const sortUp = () =>
    setPeople(homeWorkReducer(initialPeople, sortUpAC()));

  const sortDown = () =>
    setPeople(homeWorkReducer(initialPeople, sortDownAC()));

  const checkAge = () =>
    setPeople(homeWorkReducer(initialPeople, checkAgeAC(18)));

  return (
    <div className="homework">
      <h2 className="section_title">Homework 8</h2>
      <div className={styles.users}>{finalPeople}</div>
      <div className={styles.filters}>
        <SuperButton onClick={sortUp}>Sort Up</SuperButton>
        <SuperButton onClick={sortDown}>Sort Down</SuperButton>
        <SuperButton onClick={checkAge}>Check 18</SuperButton>
      </div>
      <hr />
    </div>
  );
}

export default HW8;
