import React from 'react';
import PropTypes from 'prop-types';

export default function Form({
  date,
  setDate,
  daysMonthsYears,
  setDaysMonthYears,
}) {
  function HandleChangeDate(prop, value) {
    setDaysMonthYears({
      ...daysMonthsYears,
      [prop]: Number(value),
    });
  }

  return (
    <form className="main-form">
      <label htmlFor="main-date" className="main-date">
        <span>Data: </span>
        <input
          type="date"
          id="main-date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>

      <label htmlFor="main-date">
        <span>Dias: </span>
        <input
          type="number"
          id="main-days"
          className="number-input"
          value={daysMonthsYears.days}
          onChange={(e) => HandleChangeDate('days', e.target.value)}
        />
      </label>

      <label htmlFor="more-days">
        <span>+/- Meses: </span>
        <input
          type="number"
          id="more-months"
          className="number-input"
          value={daysMonthsYears.months}
          onChange={(e) => HandleChangeDate('months', e.target.value)}
        />
      </label>

      <label htmlFor="more-days">
        <span>+/- Anos: </span>
        <input
          type="number"
          id="more-years"
          className="number-input"
          value={daysMonthsYears.years}
          onChange={(e) => HandleChangeDate('years', e.target.value)}
        />
      </label>
    </form>
  );
}

Form.propTypes = {
  date: PropTypes.string.isRequired,
  setDate: PropTypes.func.isRequired,
  daysMonthsYears: PropTypes.shape({
    days: PropTypes.number,
    months: PropTypes.number,
    years: PropTypes.number,
  }).isRequired,
  setDaysMonthYears: PropTypes.func.isRequired,
};
