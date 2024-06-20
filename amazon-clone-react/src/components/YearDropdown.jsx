import React from 'react';

const YearDropdown = ({ years, selectedYear, onYearChange }) => {
  return (
    <div className="flex space-x-4 mb-4">
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

export default YearDropdown;
