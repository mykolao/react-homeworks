import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SuperButton from "../homework-4/common/c2-SuperButton/SuperButton";
import { State, toggleLoading } from "./bll/loadingReducer";

function HW10() {
  const dispatch = useDispatch();
  const loading = useSelector<State, boolean>(
    (state) => state.loading
  );

  const setLoading = () => {
    dispatch(toggleLoading());
    window.setTimeout(dispatch, 2000, toggleLoading());
  };

  return (
    <div className="homework">
      <h2 className="section_title">Homework 10</h2>
      {loading ? (
        <div>крутилка...</div>
      ) : (
        <div>
          <SuperButton onClick={setLoading}>
            Load
          </SuperButton>
        </div>
      )}
      <hr />
    </div>
  );
}

export default HW10;
