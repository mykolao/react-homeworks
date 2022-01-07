export type State = typeof initState;
type Action = ReturnType<typeof toggleLoading>;

const initState = {
  loading: false,
};

export const toggleLoading = () => {
  return {
    type: "TOGGLE_LOADING",
  } as const;
};

export const loadingReducer = (
  state = initState,
  action: Action
): State => {
  switch (action.type) {
    case "TOGGLE_LOADING": {
      return { ...state, loading: !state.loading };
    }
    default:
      return state;
  }
};
