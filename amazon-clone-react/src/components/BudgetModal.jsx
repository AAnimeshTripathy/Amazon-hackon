import React from "react";

const BudgetModal = ({ newBudget, handleBudgetChange, handleSubmitBudget, setShowBudgetModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-25"></div>
      <div className="bg-white rounded-lg p-8 shadow-lg z-10">
        <h2 className="text-xl font-semibold mb-4">Set Budget</h2>
        <input
          type="number"
          className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
          placeholder="Enter budget amount"
          value={newBudget}
          onChange={handleBudgetChange}
        />
        <div className="flex justify-end">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2"
            onClick={handleSubmitBudget}
          >
            Set Budget
          </button>
          <button
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md"
            onClick={() => setShowBudgetModal(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BudgetModal;
