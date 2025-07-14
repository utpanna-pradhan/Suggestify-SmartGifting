import React from "react";

function Footer() {
  return (
    <div>
      <div className="footer ">
        <div className="flex flex-row flex-wrap justify-between  p-4">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
