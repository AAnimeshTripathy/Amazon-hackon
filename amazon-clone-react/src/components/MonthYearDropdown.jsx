import React from 'react';

const MonthYearDropdown = ({ months, years, selectedMonth, selectedYear, onMonthChange, onYearChange }) => {
  return (
    <div className="flex space-x-4 mb-4">
      <select
        value={selectedMonth}
        onChange={(e) => onMonthChange(e.target.value)}
        className="px-4 py-2 rounded border border-gray-300"
      >
        {months.map((month, index) => (
          <option key={index} value={month}>
            {month}
          </option>
        ))}
      </select>
      <select
        value={selectedYear}
        onChange={(e) => onYearChange(e.target.value)}
        className="px-4 py-2 rounded border border-gray-300"
      >
        {years.map((year, index) => (
          <option key={index} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MonthYearDropdown;
