import React from "react";

export default function Form() {
  return (
    <form className="main-form">
      <label htmlFor="main-date" className="main-date">
        <span>Data: </span>
        <input type="date" id="main-date" />
      </label>

      <label htmlFor="main-date">
        <span>Dias: </span>
        <input type="date" id="main-date" />
      </label>

      <label htmlFor="more-days">
        <span>+/- Meses: </span>
        <input type="number" id="more-days" className="number-input" />
      </label>

      <label htmlFor="more-days">
        <span>+/- Anos: </span>
        <input type="number" id="more-days" className="number-input" />
      </label>
    </form>
  );
}
