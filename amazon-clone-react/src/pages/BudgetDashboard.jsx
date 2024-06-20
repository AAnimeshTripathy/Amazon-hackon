import React, { useState } from 'react';
import Pagination from '../components/Pagination';
import MonthYearDropdown from '../components/MonthYearDropdown';
import YearDropdown from '../components/YearDropdown';
import FinanceCard from '../components/FinanceCard';
import PieChart from '../components/PieChart';

const BudgetDashboard = () => {
  const [view, setView] = useState('Monthly');
  const [selectedMonth, setSelectedMonth] = useState('January');
  const [selectedYear, setSelectedYear] = useState('2024');
  const [budget, setBudget] = useState(100000); // Example budget value

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const years = [
    '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', 
    '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'
  ];

  // Dummy data for Finance Cards
  const moneySpent = 50000;
  const moneyLeft = 30000;
  const savings = 20000;

  // Sample data for PieChart
  const spendingData = [
    { category: 'Groceries', amount: 15000 },
    { category: 'Rent', amount: 25000 },
    { category: 'Utilities', amount: 5000 },
    { category: 'Entertainment', amount: 7000 },
    { category: 'Dining Out', amount: 4000 },
    { category: 'Transportation', amount: 3000 },
    { category: 'Healthcare', amount: 6000 },
    { category: 'Education', amount: 2000 },
    { category: 'Travel', amount: 1000 },
    { category: 'Insurance', amount: 2000 },
    { category: 'Jewelery', amount: 13000 },
    { category: 'Education', amount: 1500 },
    { category: 'Sports', amount: 2000 },
  ];

  return (
    <div className="p-4 flex">
      <div className="w-1/2 pr-4">
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

        <div className="mb-4">
          <h1 className="text-xl">
            Budget for this period: {budget} Rs
            <button className="px-2 py-1 mt-2 font-bold ml-2">
              Set Budget
            </button>
          </h1>
        </div>

        <div className="flex gap-4">
          <FinanceCard
            title="Money Spent"
            amount={moneySpent}
            onClick={() => alert('Money Spent Details')}
          />
          <FinanceCard
            title="Money Left"
            amount={moneyLeft}
            onClick={() => alert('Money Left Details')}
          />
          <FinanceCard
            title="Savings"
            amount={savings}
            onClick={() => alert('Savings Details')}
          />
        </div>
      </div>
      
      <div className="w-1/2">
        <PieChart data={spendingData} />
      </div>
    </div>
  );
};

export default BudgetDashboard;
