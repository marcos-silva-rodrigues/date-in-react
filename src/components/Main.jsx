import React, { useState } from 'react';
import { showDate } from '../utils/show-date';
import Form from './Form';
import './main.css';

export default function Main() {
  const [date, setDate] = useState('');
  const [daysMonthsYears, setDaysMonthYears] = useState({
    days: 0,
    months: 0,
    years: 0,
  });

  return (
    <>
      <h1 className="main-title">Datas</h1>
      <Form
        date={date}
        setDate={setDate}
        daysMonthsYears={daysMonthsYears}
        setDaysMonthYears={setDaysMonthYears}
      />

      <p className="date">{showDate(date, daysMonthsYears)}</p>
    </>
  );
}
