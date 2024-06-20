import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ imgSrc, title, detail, link }) => {
  return (
    <Link to={link} className="flex items-center w-[300px] h-[100px] border border-gray-300 rounded-lg text-black no-underline transition-transform duration-200 hover:scale-105 my-2 mx-2">
      <img src={imgSrc} alt="" className="w-[65px] h-[42px] ml-2 object-cover" />
      <div className="ml-4">
        <h1 className="text-lg m-0">{title}</h1>
        <p className="text-sm text-gray-500 mt-1">{detail}</p>
      </div>
    </Link>
  );
};

export default Card;
