import React from "react";
import SuperButton from "../homework-4/common/c2-SuperButton/SuperButton";

function HW10() {
  // useSelector, useDispatch
  const loading = false;

  const setLoading = () => {
    // dispatch
    // setTimeout
    console.log("loading...");
  };

  return (
    <div className="homework">
     <h2 className="section_title">Homework 10</h2>
      {loading ? (
        <div>крутилка...</div>
      ) : (
        <div>
          <SuperButton onClick={setLoading}>
            set loading...
          </SuperButton>
        </div>
      )}
      <hr />
    </div>
  );
}

export default HW10;
