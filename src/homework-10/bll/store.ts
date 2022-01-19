import { combineReducers, createStore } from "redux";
import { themeReducer } from "../../homework-12/bll/themeReducer";
import { loadingReducer as loading } from "./loadingReducer";

const reducers = combineReducers({
  loading,
  theme: themeReducer,
});

export type RootState = ReturnType<typeof reducers>;

const store = createStore(reducers);
console.log(store.getState());
export default store;
