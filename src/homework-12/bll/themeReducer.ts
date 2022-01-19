export type Theme = "light" | "dark" | "red";

const initState: Theme = "red";

export const themeReducer = (
  state = initState,
  action: Action
): Theme => {
  switch (action.type) {
    case "CHANGE_THEME": {
      return action.payload;
    }
    default:
      return state;
  }
};

export const changeThemeC = (theme: Theme) => {
  return {
    type: "CHANGE_THEME",
    payload: theme,
  } as const;
};
type Action = ReturnType<typeof changeThemeC>;
