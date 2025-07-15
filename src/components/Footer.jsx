import React from "react";

import { Link } from "react-router-dom";
// import {Link} from 'react-router-dom';


function Footer() {
  return (
    <div>
      <div className="footer ">

        <div className="flex flex-row flex-wrap justify-between  p-4">
          <div className="w-1/2">

        <div className="flex flex-col md:flex-row flex-wrap items-center md:justify-between  p-4">
          <div className="w-full md:w-1/2 font-semibold">

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

              <span className="ps-2 pe-2 Pacificofont fs-4 ">Suggestify</span>
           
            <p className="font_red ">“Suggestify: AI That Thinks Like Your Best Friend.”</p>

            <p>123-123-1234</p>
            <p>Utpanna828@gmail.com</p>
          </div>


          <div className="w-1/2 flex justify-between ">

          <div className="w-full md:w-1/2 flex flex-col md:flex-row  justify-center md:justify-between  font-semibold">

            <div className="col-md-2 ">
              <p>Facebook</p>
              <p>Twitter</p>
              <p>Instagram</p>
              <p>Youtube</p>
            </div>
            <div className="col-md-2">
              <p>Blogs</p>
              <p>News Letter</p>
            </div>
            <div className="col-md-2">

              <p>Partner</p>
              <p>Influencer</p>
            </div>
            <div className="col-md-2">
              <p>ABout Us</p>
              <p>Contact Us</p>
              <p>Terms of Use</p>

              <p>
                <Link to ='/terms'>Terms of use</Link>
                </p>
              <p>  
                <Link to="/privacy">Privacy</Link>
                </p>
            </div>
            <div className="col-md-2">
              <p>
                
               Home
                </p>
              <p>
                
                ABout Us
                </p>
              <p>Contact Us</p>
             

            </div>
          </div>
        </div>
      </div>
        </div>
        </div>
        </div>
        </div>
    
  );
}

export default Footer;
