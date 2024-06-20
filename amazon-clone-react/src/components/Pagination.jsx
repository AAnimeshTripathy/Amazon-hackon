import React from 'react';

const Pagination = ({ options, selected, onSelect }) => {
  return (
    <div className="flex space-x-4 mb-4">
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => onSelect(option)}
          className={`px-4 py-2 rounded ${selected === option ? 'font-bold' : ''}`}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
