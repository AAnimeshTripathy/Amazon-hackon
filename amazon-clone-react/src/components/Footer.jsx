import React from 'react';
import Logo from '../assets/amazon_logo.png';
const Footer = () => {
  return (
    <footer>
      <div className="bg-[#2f3c4b] text-white flex justify-center items-center h-12 text-sm cursor-pointer">
        <p>Back to top</p>
      </div>
      <div className="bg-[#284343] text-white h-106 flex justify-center gap-24 py-10">
        <div className="links">
          <ul>
            <li className="font-semibold text-base pt-10">Get to Know Us</li>
            <li className="text-sm mt-4 cursor-pointer">Careers</li>
            <li className="text-sm mt-4 cursor-pointer">Blog</li>
            <li className="text-sm mt-4 cursor-pointer">About Amazon</li>
            <li className="text-sm mt-4 cursor-pointer">Investor Relations</li>
            <li className="text-sm mt-4 cursor-pointer">Amazon Devices</li>
            <li className="text-sm mt-4 cursor-pointer">Amazon Science</li>
          </ul>
        </div>
        <div className="links">
          <ul>
            <li className="font-semibold text-base pt-10">Make Money with Us</li>
            <li className="text-sm mt-4 cursor-pointer">Sell products on Amazon</li>
            <li className="text-sm mt-4 cursor-pointer">Sell on Amazon Business</li>
            <li className="text-sm mt-4 cursor-pointer">Sell apps on Amazon</li>
            <li className="text-sm mt-4 cursor-pointer">Become an Affiliate</li>
            <li className="text-sm mt-4 cursor-pointer">Advertise Your Products</li>
            <li className="text-sm mt-4 cursor-pointer">Self-Publish with Us</li>
            <li className="text-sm mt-4 cursor-pointer">Host an Amazon Hub</li>
            <li className="text-sm mt-4 cursor-pointer">›See More Make Money with Us</li>
          </ul>
        </div>
        <div className="links">
          <ul>
            <li className="font-semibold text-base pt-10">Amazon Payment Products</li>
            <li className="text-sm mt-4 cursor-pointer">Amazon Business Card</li>
            <li className="text-sm mt-4 cursor-pointer">Shop with Points</li>
            <li className="text-sm mt-4 cursor-pointer">Reload Your Balance</li>
            <li className="text-sm mt-4 cursor-pointer">Amazon Currency Converter</li>
          </ul>
        </div>
        <div className="links">
          <ul>
            <li className="font-semibold text-base pt-10">Let Us Help You</li>
            <li className="text-sm mt-4 cursor-pointer">Amazon and COVID-19</li>
            <li className="text-sm mt-4 cursor-pointer">Your Account</li>
            <li className="text-sm mt-4 cursor-pointer">Your Orders</li>
            <li className="text-sm mt-4 cursor-pointer">Shipping Rates & Policies</li>
            <li className="text-sm mt-4 cursor-pointer">Returns & Replacements</li>
            <li className="text-sm mt-4 cursor-pointer">Manage Your Content and Devices</li>
            <li className="text-sm mt-4 cursor-pointer">Amazon Assistant</li>
            <li className="text-sm mt-4 cursor-pointer">Help</li>
          </ul>
        </div>
      </div>
      <div className="bg-[#284343] border-t border-white flex justify-center items-center h-16">
        <img src={Logo} alt="Amazon" className="w-28" />
      </div>
      <div className="bg-[#0f1111] text-white h-16 flex flex-col justify-center items-center text-xs">
        <div className="flex space-x-4">
          <button className="hover:underline text-white">Conditions of Use</button>
          <button className="hover:underline text-white">Privacy Notice</button>
          <button className="hover:underline text-white">Your Ads Privacy Choices</button>
        </div>
        <p className="mt-2">© 1996-2024, Amazon.com, Inc. or its affiliates</p>
      </div>
    </footer>
  );
};

export default Footer;
