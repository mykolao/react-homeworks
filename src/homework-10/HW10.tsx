import React from "react";
import { CSSProperties } from "react";
import { useDispatch, useSelector } from "react-redux";
import SuperButton from "../homework-4/common/c2-SuperButton/SuperButton";
import { State, toggleLoading } from "./bll/loadingReducer";

const Spinner = () => {
  const [rotationAngle, setRotationAngle] = React.useState(1);

  React.useEffect(() => {
    const intervalId = window.setInterval(() => {
      console.log("Spinnin");
      setRotationAngle(
        (previous) =>
          previous + Math.abs(Math.sin(previous)) * 25
      );
    }, 16);

    return () => window.clearInterval(intervalId);
  }, []);

  const componentStyles: CSSProperties = {
    paddingBottom: "12px",
  };
  const outerStyles: CSSProperties = {
    height: "31px",
    width: "54px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const innerStyles: CSSProperties = {
    width: "3px",
    height: "27px",
    backgroundColor: "var(--color-red)",
    borderRadius: "50px",
    transform: `rotate(${rotationAngle}deg)`,
  };
  return (
    <div style={componentStyles}>
      <div style={outerStyles}>
        <div style={innerStyles}></div>
      </div>
    </div>
  );
};

function HW10() {
  const dispatch = useDispatch();
  const loading = useSelector<State, boolean>(
    (state) => state.loading
  );

  const setLoading = () => {
    dispatch(toggleLoading());
    window.setTimeout(dispatch, 2000, toggleLoading());
  };

  const componentStyles: CSSProperties = {
    margin: "12px",
  };

  return (
    <div className="homework">
      <h2 className="section_title">Homework 10</h2>
      <div style={componentStyles}>
        {loading ? (
          <Spinner />
        ) : (
          <div>
            <SuperButton onClick={setLoading}>Load</SuperButton>
          </div>
        )}
      </div>
      <hr />
    </div>
  );
}

export default HW10;
