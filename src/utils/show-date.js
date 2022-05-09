export function showDate(dateString, daysMonthsYears) {
  const dateToShow = new Date(dateString);

  if (!dateString || !dateToShow.getTime()) return '';

  dateToShow.setUTCHours(3);
  const { days, months, years } = daysMonthsYears;

  if (days) dateToShow.setDate(dateToShow.getDate() + days);
  if (months) dateToShow.setMonth(dateToShow.getMonth() + months);
  if (years) dateToShow.setFullYear(dateToShow.getFullYear() + years);

  return dateToShow.toLocaleDateString();
}