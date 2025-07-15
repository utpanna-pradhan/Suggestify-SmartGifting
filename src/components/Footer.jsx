import React from "react";
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <div>
      <div className="footer ">
        <div className="flex flex-row flex-wrap justify-between  p-4 font-semibold text-normal">
          <div className="w-1/2">
            <p className="flex items-center">
              <img
                src="https://icon-library.com/images/gift-icon-png/gift-icon-png-16.jpg"
                alt=""
                width={50}
                height={40}
              />
              <span className="ps-2 pe-2 Pacificofont fs-4">Suggestify</span>
            </p>
            <p>“Suggestify: AI That Thinks Like Your Best Friend.”</p>
            <p>123-123-1234</p>
            <p>Utpanna828@gmail.com</p>
          </div>

          <div className="w-1/2 flex justify-between ">
            <div className="col-md-2 ">
              <p className=" hover:text-red-800">Facebook</p>
              <p className=" hover:text-red-800">Twitter</p>
              <p className=" hover:text-red-800">Instagram</p>
              <p className=" hover:text-red-800">Youtube</p>
            </div>
            <div className="col-md-2">
              <p className=" hover:text-red-800">Blogs</p>
              <p className=" hover:text-red-800">News Letter</p>
            </div>
            <div className="col-md-2">
              <p className=" hover:text-red-800">
                <Link to='/privacy'> Privacy</Link>
                </p>
              <p className=" hover:text-red-800">
                <Link to="/terms">Terms of Use</Link></p>
            </div>
            <div className="col-md-2">
              <p className=" hover:text-red-800">Home</p>
              <p className=" hover:text-red-800"> ABout Us</p>
              <p className=" hover:text-red-800">Contact Us</p>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;