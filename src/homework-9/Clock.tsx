import { useState } from "react";
import SuperButton from "../homework-4/common/c2-SuperButton/SuperButton";

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
  let dd = String(date.getDay() + 1);

  mm = +mm < 10 ? `0${mm}` : mm;
  dd = +dd < 10 ? `0${dd}` : dd;

  return `${yy}:${mm}:${dd}`;
};

function Clock() {
  const [timerId, setTimerId] = useState<number>(0);
  const [date, setDate] = useState<Date>();
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
    : formatTime(new Date());

  const stringDate = date
    ? formatDate(date)
    : formatDate(new Date());

  return (
    <div>
      <div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {stringTime}
      </div>

      {show && <div>{stringDate}</div>}

      <SuperButton onClick={start}>Start</SuperButton>
      <SuperButton onClick={stop}>Stop</SuperButton>
    </div>
  );
}

export default Clock;
