import React, { useState } from "react";

import * as s from "./App.module.scss";

const App = () => {
  const [firstDay, setFirstDay] = useState("");
  const [lastDay, setLastDay] = useState("");
  const [salary, setSalary] = useState(0);
  const [gratuity, setGratuity] = useState(0);

  const getFirstDay = (e) => {
    console.log("FirstDate = ", e.target.value);
    setFirstDay(e.target.value);
  };

  const getLastDay = (e) => {
    console.log("Last Date = ", e.target.value);
    setLastDay(e.target.value);
  };

  const getDuration = () => {
    d2 = new Date(lastDay);
    d1 = new Date(firstDay);
    console.log("lastDay", d2, d1);
    const years = Math.abs(d2 - d1) / (1000 * 60 * 60 * 24 * 365);
    console.log("Date years:", years);
    setGratuity((salary * 21 * years) / 30);
    console.log("gratuity:", gratuity);
  };

  return (
    <>
      <h1 className={s.pageTitle}>Gratuity App</h1>
      <div className={s.container}>
        <div>
          <label htmlFor="first-day" className={s.dateInputLabel}>
            Starting Date:
          </label>
          <input
            type={"date"}
            id={"first-day"}
            value={firstDay}
            name={"first-day"}
            className={s.dateInput}
            onChange={getFirstDay}
          ></input>
        </div>
        <div>
          <label htmlFor="last-day" className={s.dateInputLabel}>
            Ending Date:
          </label>
          <input
            type={"date"}
            id={"last-day"}
            value={lastDay}
            name={"last-day"}
            className={s.dateInput}
            onChange={getLastDay}
          ></input>
        </div>
        <div>
          <label htmlFor="salary" className={s.dateInputLabel}>
            Salary:
          </label>
          <input
            type={"number"}
            id={"salary"}
            value={salary}
            name={"salary"}
            className={s.dateInput}
            onChange={(e) => setSalary(e.target.value)}
          ></input>
        </div>
        <button className={s.btn} onClick={getDuration}>
          Calculate
        </button>
        <h1>{gratuity ? `Gratuity=${gratuity}` : null}</h1>
      </div>
    </>
  );
};

export default App;
