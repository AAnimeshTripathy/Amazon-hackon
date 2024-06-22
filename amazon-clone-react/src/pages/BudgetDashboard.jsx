import React, { useState, useEffect } from "react";
import { auth } from "../utils/firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";
import Pagination from "../components/Pagination";
import MonthYearDropdown from "../components/MonthYearDropdown";
import YearDropdown from "../components/YearDropdown";
import FinanceCard from "../components/FinanceCard";
import PieChart from "../components/PieChart";
import getDataByMonthAndYear from "../data/data";
import BudgetModal from "../components/BudgetModal";
const BudgetDashboard = () => {
  const [user] = useAuthState(auth);
  const [view, setView] = useState("Monthly");
  const [selectedMonth, setSelectedMonth] = useState("January");
  const [selectedYear, setSelectedYear] = useState("2024");
  const [budget, setBudget] = useState(100000);
  const [spendingData, setSpendingData] = useState([]);
  const [showSpendingChart, setShowSpendingChart] = useState(false);
  const [showSavingsChart, setShowSavingsChart] = useState(false);
  const [newBudget, setNewBudget] = useState("");
  const [showBudgetModal, setShowBudgetModal] = useState(false);

  const handleBudgetChange = (e) => {
    setNewBudget(e.target.value);
  };

  const handleSubmitBudget = () => {
    if (!isNaN(newBudget)) {
      setBudget(parseInt(newBudget));
      setShowBudgetModal(false); 
    } else {
      alert("Please enter a valid budget amount.");
    }
  };

  const moneySpent = spendingData.purchases
    ? parseFloat(spendingData.purchases.reduce((acc, item) => acc + item.totalAmount, 0)).toFixed(2)
    : 0;
  const moneyLeft = parseFloat((budget - moneySpent).toFixed(2));
  const savings = spendingData.savings
    ? parseFloat(spendingData.savings.reduce((acc, item) => acc + item.totalAmount, 0)).toFixed(2)
    : 0;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const years = [
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
    "2024",
    "2025",
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data;
        if (view === "Yearly") {
          data = await getDataByMonthAndYear(parseInt(selectedYear));
        } else {
          // Monthly
          data = await getDataByMonthAndYear(
            parseInt(selectedYear),
            months.indexOf(selectedMonth) + 1
          );
        }
        setSpendingData(data);
      } catch (error) {
        console.error("Error retrieving spending data:", error);
      }
    };

    fetchData();
  }, [selectedMonth, selectedYear, view]);

  const handleToggleSpendingChart = () => {
    setShowSpendingChart(!showSpendingChart);
  };

  const handleToggleSavingsChart = () => {
    setShowSavingsChart(!showSavingsChart);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Budget Dashboard</h1>
      <Pagination
        options={["Monthly", "Yearly"]}
        selected={view}
        onSelect={setView}
      />
      {view === "Monthly" && (
        <MonthYearDropdown
          months={months}
          years={years}
          selectedMonth={selectedMonth}
          selectedYear={selectedYear}
          onMonthChange={setSelectedMonth}
          onYearChange={setSelectedYear}
        />
      )}
      {view === "Yearly" && (
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
          <button
            className="px-2 py-1 mt-2 font-bold ml-2"
            onClick={() => setShowBudgetModal(true)} // Show modal on click
          >
            Set Budget
          </button>
        </h1>
      </div>

       {/* Budget Modal */}
       {showBudgetModal && (
        <BudgetModal
          newBudget={newBudget}
          handleBudgetChange={handleBudgetChange}
          handleSubmitBudget={handleSubmitBudget}
          setShowBudgetModal={setShowBudgetModal}
        />
      )}

      <div className="flex justify-between">
        <div>
          <FinanceCard
            title="Money Spent"
            amount={moneySpent}
            onClick={handleToggleSpendingChart}
          />
        </div>
        <div>
          <FinanceCard
            title="Money Left"
            amount={moneyLeft}
            onClick={() => alert("Money Left Details")}
          />
        </div>
        <div>
          <FinanceCard
            title="Savings"
            amount={savings}
            onClick={handleToggleSavingsChart}
          />
          {/* {showSavingsChart && <PieChart data={spendingData.savings} />} */}
        </div>
      </div>
      <hr className="my-4 border-gray-300" />

      <div className="flex justify-between">
          <PieChart
            data={spendingData.payments} 
            detail={'Payment Details'}
          />
          <PieChart
            data={spendingData.purchases}
            detail={'Purchase Details'}
          />
          <PieChart
            data={spendingData.savings}
            detail={'Saving Details'}
          />
      </div>
    </div>
  );
};

export default BudgetDashboard;
