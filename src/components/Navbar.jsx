import React from "react";
// import gifticon from "../assets/gift-icon-png.jpg";
import { Link } from "react-router-dom";
import "../Stylesheet/Navbar.css";
import { FaBell } from "react-icons/fa";
import { FaLanguage } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa";
import { motion } from "motion/react";
import { GiHamburgerMenu } from "react-icons/gi";
function Navbar() {
  return (
    <div>
      <nav className="flex  justify-between items-center font-bold  p-4 fixed top-0 left-0 right-0 shadow-md z-50  backdrop-blur-lg bg-opacity-50">
        <ul>
          <li className="flex items-center justify-center">
            <img
              src="https://static.thenounproject.com/png/1265782-200.png"
              alt="logo"
              width={50}
              height={40}
            />
            <div className="flex flex-col logo_ ">
              <span className="logo_font pl-2  text-lg">Suggestify Pro</span>
              <small className="text-gray-700">
                AI That Thinks Like Your Best Friend
              </small>
            </div>
          </li>
        </ul>
        <ul className="flex nav_middle text-lg ">
          <li className="pl-4 pr-4">
            <Link to="/">Home</Link>
          </li>
          <li className="pl-4 pr-4">
            <Link to="/about">About</Link>
          </li>
          <li className="pl-4 pr-4">
            <Link to="/about">Products</Link>
          </li>
          <li className="pl-4 pr-4">
            <Link to="/about">Wishlist</Link>
          </li>
          <li className="pl-4 pr-4">
            <Link to="/about">Contact</Link>
          </li>
        </ul>
        <ul className="flex flex-row justify-between items-center nav_third gap-4">
          <li>
            <FaBell aria-label="Notifications" />
          </li>
          <li>
            <FaLanguage  ria-label="Language Selector"/>
          </li>
          <li>
            <FaCartArrowDown  aria-label="Cart"/>
          </li>
          <li className="pl-4 pr-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-white px-4 py-2 rounded Sign_btn"
            >
              Sign up
            </motion.button>
          </li>
        </ul>
        <ul className="hamburger">
          <GiHamburgerMenu />
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
