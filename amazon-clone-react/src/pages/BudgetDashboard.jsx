import React, { useState } from 'react';
import Pagination from '../components/Pagination';
import MonthYearDropdown from '../components/MonthYearDropdown';
import YearDropdown from '../components/YearDropdown'; // Separate component for YearDropdown

const BudgetDashboard = () => {
  const [view, setView] = useState('Monthly');
  const [selectedMonth, setSelectedMonth] = useState('January');
  const [selectedYear, setSelectedYear] = useState('2024');

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const years = ['2008', '2009', '2010','2011', '2012', '2013','2014', '2015', '2016','2017', '2018', '2019','2020', '2021', '2022','2023', '2024', '2025'];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Budget Dashboard</h1>
      <Pagination
        options={['Monthly', 'Yearly']}
        selected={view}
        onSelect={setView}
      />
      {view === 'Monthly' && (
        <MonthYearDropdown
          months={months}
          years={years}
          selectedMonth={selectedMonth}
          selectedYear={selectedYear}
          onMonthChange={setSelectedMonth}
          onYearChange={setSelectedYear}
        />
      )}
      {view === 'Yearly' && (
        <YearDropdown
          years={years}
          selectedYear={selectedYear}
          onYearChange={setSelectedYear}
        />
      )}
      <hr className="my-4 border-gray-300" />
    </div>
  );
};

export default BudgetDashboard;
