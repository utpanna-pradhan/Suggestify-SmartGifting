import React from "react";
import "../Stylesheet/Home.css";
import { Link } from "react-router-dom";
import Formsec from "./Formsec";
import { motion } from "motion/react";


function Home() {
   
  return (
    <div>











      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#b30000"
          fill-opacity="1"
          d="M0,160L48,165.3C96,171,192,181,288,176C384,171,480,149,576,138.7C672,128,768,128,864,138.7C960,149,1056,171,1152,197.3C1248,224,1344,256,1392,272L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <div className="mt-0">
        <div className="flex flex-col md:flex-row mb-4  mt-0 home_main_content">
          <div className="flex flex-col pl-8 gap-5 justify-center md:w-2/3">
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
            >
              <h1 className="text-9xl font-bold text-start Pacificofont font_red">
                Suggestify Pro
              </h1>
            </motion.path>

            <h3 className=" text-3xl font-semibold  text-start pt-12">
              “AI-Powered Gifting. Thoughtful. Personal. Effortless.”
            </h3>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-50"
            >
              <button
                type="button"
                className=" inline-block bg-red-600 text-white px-6 py-2 rounded-md text-lg hover:bg-red-700 transition"
              >
                <Link to="/form">Scroll to Form</Link>
              </button>
            </motion.button>
          </div>

          {/* Image Section */}
          <div className="md:w-1/3 flex justify-center items-center Home_img">
            <img
              src="https://www.freeiconspng.com/uploads/gift-red-box-png-17.png"
              alt="gift"
              className="w-full max-w-xs"
            />
          </div>
        </div>
      </div>
      <Formsec />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#b30000"
          fill-opacity="1"
          d="M0,128L60,154.7C120,181,240,235,360,261.3C480,288,600,288,720,266.7C840,245,960,203,1080,186.7C1200,171,1320,181,1380,186.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

export default Home;
