import React from "react";
import gifticon from "../assets/gift-icon-png.jpg";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
<<<<<<< HEAD
      <nav className="flex justify-between align-items-center font-bold text-lg p-4 fixed top-0 left-0 right-0 shadow-md z-50">
=======
      <nav className="flex  justify-between align-items-center font-bold text-lg p-4 fixed top-0 left-0 right-0 shadow-md z-50 bg-transparent backdrop-blur-lg bg-opacity-50">
>>>>>>> 8e7b949 (added legal pages)
        <ul>
          <li className="flex items-center justify-center">
            <img src={gifticon} alt="logo" width={50} height={40} />
            <span className="Pacificofont pl-4  text-lg">Suggestify Pro</span>
          </li>
        </ul>
        <ul className="flex ">
          <li className="pl-4 pr-4">
            <Link to="/">Home</Link>
          </li>
          <li className="pl-4 pr-4">
            <Link to="/about">About</Link>
          </li>
        </ul>
        <ul>
          <li className="pl-4 pr-4">
            <button className="bg-red-700 text-white px-4 py-2 rounded  hover:bg-red-400">Sign up</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
