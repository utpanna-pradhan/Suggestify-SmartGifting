import React from 'react';
import '../Stylesheet/Home.css';
import { Link } from "react-router-dom";
// import Formsec from './Formsec';

function Home() {
  return (
    <div>
          <div className="mt-28 ">
      {/* <h1 className="mx-auto text-5xl font-bold  text-center">
       
        “AI-Powered Gifting. Thoughtful. Personal. Effortless.”
      </h1> */}
     
      <div className="flex flex-col md:flex-row mb-4 mt-5 ">
        <div className='flex flex-col pl-8 gap-5 justify-center md:w-2/3'>
             <h1 className='text-5xl font-bold text-start'>Suggestify Pro</h1>
       <h3 className=" text-3xl font-semibold  text-start ">
       
        “AI-Powered Gifting. Thoughtful. Personal. Effortless.”
      </h3>
      <button type="button" className="w-75 inline-block bg-red-500 text-white px-6 py-2 rounded-md text-lg hover:bg-red-600 transition">
        <Link to="/form" >
        Scroll to Form</Link>
        </button>
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
    {/* <Formsec /> */}
    </div>
  )
}

export default Home
