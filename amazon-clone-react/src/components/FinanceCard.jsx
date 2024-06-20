import React from 'react';

const FinanceCard = ({ title, amount, onClick }) => {
  return (
    <div
      className="flex flex-col items-center justify-center p-4 border border-gray-300 rounded-lg w-[250px] h-[150px] cursor-pointer transition-transform duration-200 hover:scale-105"
      onClick={onClick}
    >
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-2xl font-bold">{amount} Rs</p>
    </div>
  );
};

export default FinanceCard;
