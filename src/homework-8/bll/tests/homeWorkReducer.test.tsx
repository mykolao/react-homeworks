import { UserType } from "../../HW8";
import {
  checkAge,
  homeWorkReducer,
  sortDown,
  sortUp,
} from "../homeWorkReducer";

let initialState: UserType[];

beforeEach(() => {
  initialState = [
    { _id: 0, name: "Кот", age: 3 },
    { _id: 1, name: "Александр", age: 66 },
    { _id: 2, name: "Коля", age: 16 },
    { _id: 3, name: "Виктор", age: 44 },
    { _id: 4, name: "Дмитрий", age: 40 },
    { _id: 5, name: "Ирина", age: 55 },
  ];
});

test("sort name up", () => {
  const newState = homeWorkReducer(initialState, sortUp());
  expect(newState[0]._id).toBe(initialState[1]._id);
});

test("sort name down", () => {
  const newState = homeWorkReducer(initialState, sortDown());
  expect(newState[4]._id).toBe(initialState[3]._id);
});

test("check age 18", () => {
  const newState = homeWorkReducer(initialState, checkAge(18));

  expect(newState.length).toBe(4);
});
