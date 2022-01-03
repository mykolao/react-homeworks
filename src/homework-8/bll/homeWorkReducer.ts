import { UserType } from "../HW8";

export const sortUp = () => {
  return {
    type: "sort",
    payload: "up",
  } as const;
};

export const sortDown = () => {
  return {
    type: "sort",
    payload: "down",
  } as const;
};

export const checkAge = (age: number) => {
  return {
    type: "check",
    payload: age,
  };
};

type Action =
  | ReturnType<typeof sortUp>
  | ReturnType<typeof sortDown>
  | ReturnType<typeof checkAge>;

export const homeWorkReducer = (
  state: UserType[],
  action: Action
): UserType[] => {
  // need to fix any
  switch (action.type) {
    case "sort": {
      // need to fix
      return state;
    }
    case "check": {
      // need to fix
      return state;
    }
    default:
      return state;
  }
};
