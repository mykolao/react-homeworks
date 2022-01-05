import { CSSProperties, useState } from "react";
import SuperButton from "../homework-4/common/c2-SuperButton/SuperButton";

// Utils
const formatTime = (date: Date): string => {
  let hh = String(date.getHours());
  let mm = String(date.getMinutes());
  let ss = String(date.getSeconds());

  hh = +hh < 10 ? `0${hh}` : hh;
  mm = +mm < 10 ? `0${mm}` : mm;
  ss = +ss < 10 ? `0${ss}` : ss;

  return `${hh}:${mm}:${ss}`;
};

const formatDate = (date: Date): string => {
  let yy = String(date.getFullYear());
  let mm = String(date.getMonth() + 1);
  let dd = String(date.getDay() + 2);

  mm = +mm < 10 ? `0${mm}` : mm;
  dd = +dd < 10 ? `0${dd}` : dd;

  return `${yy}:${mm}:${dd}`;
};

// Styles
const clockStyle: CSSProperties = {
  margin: "12px",
};

const timeStyle: CSSProperties = {
  fontSize: "1.2rem",
  fontWeight: "bold",
  letterSpacing: "1px",
  color: "var(--color-blue)",
  paddingBottom: "2px",
};

const dateStyle = { ...timeStyle, color: "var(--color-red)" };

const buttonsStyle: CSSProperties = {
  display: "flex",
  gap: "4px",
  marginTop: "8px",
};

function Clock() {
  const [timerId, setTimerId] = useState<number>(0);
  const [date, setDate] = useState<Date>();
  const [defaultDate] = useState(new Date());
  const [show, setShow] = useState<boolean>(false);

  const stop = () => {
    window.clearInterval(timerId);
  };
  const start = () => {
    stop();
    const id: number = window.setInterval(() => {
      setDate(new Date());
    }, 1000);
    setTimerId(id);
  };

  const onMouseEnter = () => {
    setShow(true);
  };
  const onMouseLeave = () => {
    setShow(false);
  };

  const stringTime = date
    ? formatTime(date)
    : formatTime(defaultDate);

  const stringDate = date
    ? formatDate(date)
    : formatDate(defaultDate);

  return (
    <div style={clockStyle}>
      <div
        style={timeStyle}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {stringTime}
      </div>

      {show && <div style={dateStyle}>{stringDate}</div>}
      <div style={buttonsStyle}>
        <SuperButton onClick={start}>Start</SuperButton>
        <SuperButton onClick={stop}>Stop</SuperButton>
      </div>
    </div>
  );
}

export default Clock;
