import { createStore } from "redux";
import { loadingReducer as loading } from "./loadingReducer";

const store = createStore(loading);
export default store;
