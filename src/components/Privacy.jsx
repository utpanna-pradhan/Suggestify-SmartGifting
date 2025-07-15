import React from "react";
import "../Stylesheet/Privacy.css";
// import { Link } from "react-router-dom";

function Privacy() {
  return (
    <div className="privacy_page mb-28 ">
      <div className="privacy_head ">
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#b20000" fill-opacity="1" d="M0,256L120,229.3C240,203,480,149,720,138.7C960,128,1200,160,1320,176L1440,192L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
      </svg> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="md:mt-0 mt-5"
        >
          <path
            fill="#b20000"
            fill-opacity="1"
            d="M0,96L120,133.3C240,171,480,245,720,250.7C960,256,1200,192,1320,160L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
          ></path>
        </svg>
        <h1 className="md:text-5xl text-lg text-white font-bold">
          Privacy Policy
        </h1>
        <small className=" text-white md:font-semibold font-normal">
          We care about your privacy
        </small>
      </div>
      <div className="privacy_content flex md:flex-row flex-col flex-wrap justify-center  p-4 md:p-8 ">
        <div className="privacy_left md:w-1/4 w-full h-auto">
          <h4 className="text-3xl font-bold mb-2">Privacy Policy</h4>
          <hr />
          <p className="text-lg font-semibold mb-2 mt-6">
            <a href="#data">Data Collected </a>
          </p>
          <hr />
          <p className="text-lg font-semibold mb-2 mt-6">
            <a href="#save">Do we save it?</a>
          </p>
          <hr />
          <p className="text-lg font-semibold mb-2 mt-6">
            <a href="#cookie">Cookies?</a>{" "}
          </p>
          <hr />
          <p className="text-lg font-semibold mb-2 mt-6">
            <a href="#contact">Contact info for concerns</a>
          </p>
          <hr />
        </div>
        <div className="privacy_right md:w-3/4 w-full h-auto">
          <div className="privacy_right_1 mb-12 scroll-mt-32" id="data">
            <h4 className="privacy_right_1_heading text-4xl md:text-5xl font-semibold mb-4 font_red">
              What data is collected?
            </h4>
            <h5 className="mt-4 mb-4">
              We collect basic user data when you interact with our website.
              This includes:
            </h5>
            <p className="mt-4 mb-4">
              - Name and email (if submitted via contact forms) <br />- Browser
              type and device information <br />- IP address and location data{" "}
              <br />- Interaction behavior (like clicks or time spent)
            </p>
            <p className="mt-4 mb-4">
              This helps us improve user experience and provide relevant
              suggestions.
            </p>

            <img
              src="https://cdn-icons-png.flaticon.com/512/2103/2103533.png"
              alt=""
              width={300}
              height={300}
              className="mx-auto"
            />
          </div>
          <div className="privacy_right_1 mb-12 scroll-mt-32" id="save">
            <h4 className="privacy_right_1_heading text-4xl md:text-5xl font-semibold mb-4 font_red">
              Do we save it?
            </h4>
            <h5>
              Yes, we securely store only essential information for
              functionality and analytics.
            </h5>
            <p className="mt-8 mb-8">
              - We do NOT sell your data to third parties. - All data is
              encrypted and stored in compliance with standard privacy
              regulations (like GDPR). - You can request data deletion by
              contacting us.
            </p>
            <p>
              We only retain your data for as long as necessary to serve the
              purpose it was collected for.
            </p>
            <img
              src="https://www.freeiconspng.com/uploads/save-icon-20.png"
              alt=""
              width={300}
              height={300}
              className="mx-auto"
            />
          </div>
          <div className="privacy_right_1 mb-12 scroll-mt-32" id="cookie">
            <h4 className="privacy_right_1_heading text-4xl md:text-5xl font-semibold mb-4 font_red">
              Cookies?
            </h4>
            <p>Yes, we use cookies for a better browsing experience.</p>
            <p className="mt-8 mb-8">
              Cookies help us: - Remember your preferences - Provide
              personalized gift suggestions - Track analytics to improve our app
            </p>
            <p>
              You can choose to disable cookies through your browser settings,
              but some features might not function optimally.
            </p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1035/1035040.png"
              alt=""
              width={300}
              height={300}
              className="mx-auto"
            />
          </div>
          <div className="privacy_right_1 mb-12 scroll-mt-32" id="contact">
            <h4 className="privacy_right_1_heading text-4xl md:text-5xl font-semibold mb-4 font_red">
              Contact info for concerns
            </h4>
            <p>
              We take your privacy seriously. If you have any questions or
              concerns, feel free to reach out.
            </p>
            <p className="mt-4 mb-4">
               📧 Email: Utpanna828@gmail.com </p>
               <p className="mt-4 mb-4">
                  📞 Phone: +91-123-123-1234
               </p>
          
            <p className="mt-4 mb-4">Typically respond within 24–48 hours.</p>
            <img
              src="https://static.vecteezy.com/system/resources/previews/029/816/474/non_2x/icons-business-card-contact-information-symbols-vector-illustration-isolated-on-transparent-background-free-png.png"
              alt=""
              width={300}
              height={300}
              className="mx-auto "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Privacy;
