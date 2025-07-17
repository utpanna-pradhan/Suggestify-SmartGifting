import React from "react";
import "../Stylesheet/About.css";
import aboutimg from "../assets/wp3853408.jpg";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div className="">
        <div className="about_left ">
          <img
            src={aboutimg}
            alt="gift background image"
            className="rounded-br-lg"
          />
        </div>
        <div className="about_right text-white">
          <h1 className="why_Suggestify text-8xl font-bold Pacificofont p-4">
            Why Suggestify 
          </h1>
           <p className="about_Sub_head1 text-4xl">
           - Gifting, done smarter.
          </p>
          <p className="about_Sub_head text-lg text-wrap">
           AI-powered suggestions that understand your emotions, budget, and relationships 
           <br />— just like a friend would.
          </p>
          <button className="pl-5 pr-5 pt-3 pb-3 text-white font-semibold getstarted_btn bg-white font_red rounded text-lg">
            <Link to="/form">Get Started</Link>
          </button>
        </div>
      </div>

      <div className="about_user flex flex-row p-4 justify-center items-center text-center bg-lime-50  ml-12  mr-12 rounded-[2vw] gap-5 mx-auto">
        <div className="user_1">
          <h3 className="font_red text-5xl font-bold">300 +</h3>
          <h5>user </h5>
          <p>
           Personalized Gifts Suggested  
          </p>
        </div>
        <div className="user_1">
          <h3 className="font_red text-5xl font-bold">98%</h3>
          <h5>user </h5>
          <p>
             Found The Perfect Gift
          </p>
        </div>
        <div className="user_1">
          <h3 className="font_red text-5xl font-bold">AI</h3>
          <h5></h5>
          <p>
            Powered by Advanced AI Logic 
          </p>
        </div>
      </div>

      <h3 className="text-6xl font-bold text-center Pacificofont mt-54 mb-24 font_red">
        How It Works ?
      </h3>
      <div className="about_steps mt-12 mb-20 flex flex-col md:flex-row gap-12 pt-12 pb-12 pl-12 pr-12 bg-red-700 ">
        <div className="step1 bg-white p-8 rounded-2xl ">
          <div className="step1_icon"></div>
          <p>Step 1</p>
          <div className="step1_head">
            <h3>Fill the Form</h3>
          </div>
          <div className="step1_body">
            <p>
              Enter recipient's age, gender, occasion, interests, and budget.
            </p>
          </div>
        </div>
        <div className="step1 bg-white  p-8 rounded-2xl">
          <div className="step1_icon"></div>
          <p>Step 1</p>
          <div className="step1_head">
            <h3>Let AI Think</h3>
          </div>
          <div className="step1_body">
            <p>
              Our system uses AI + curated data to generate perfect gift ideas.
            </p>
          </div>
        </div>
        <div className="step1 bg-white  p-8 rounded-2xl">
          <div className="step1_icon"></div>
          <p>Step 1</p>
          <div className="step1_head">
            <h3>Get Suggestions</h3>
          </div>
          <div className="step1_body">
            <p>View, share, or save thoughtful gift recommendations.</p>
          </div>
        </div>
      </div>

      <div className="about_why mt-32  p-16 ">
        <h3 className="text-6xl font-bold text-center Pacificofont font_red pb-24">
          Why Choose Suggestify Pro?{" "}
        </h3>
        <div className="Personalized flex justify-between items-center">
          <div className="Personalized_left">
            <h4 className="text-4xl font-bold">🎯 Personalized</h4>
            <p className="p-8 text-lg">
              {" "}
              Tailored to the recipient’s age, occasion, and preferences
            </p>
          </div>
          <div className="Personalized_right">
            <img
              src="https://www.pngall.com/wp-content/uploads/2018/04/Goal-PNG-File.png"
              alt=""
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="AI-Driven flex justify-between items-center">
          <div className="AI-Driven_right">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/058/016/160/small/stunning-minimalist-digital-consciousness-in-artificial-intelligence-transparent-background-4k-free-png.png"
              alt=""
              width={300}
              height={300}
            />
          </div>
          <div className="AI-Driven_left">
            <h4 className="text-4xl font-bold">🧠 AI-Driven</h4>
            <p className="p-8 text-lg">
              
           	Trained logic behind suggestions makes results relevant & human-like.
            </p>
          </div>
        </div>
        <div className=" Time-Saving flex justify-between items-center">
          <div className=" Time-Saving_left">
            <h4 className="text-4xl font-bold">🕒 Time-Saving</h4>
            <p className="p-8 text-lg">
             
             	Skip the browsing rabbit-hole. Get what you need in one click
            </p>
          </div>
          <div className=" Time-Saving_right">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3696/3696831.png"
              alt=""
              width={400}
              height={400}
            />
          </div>
        </div>

        <div className=" Meaningful flex justify-between items-center">
          <div className=" Meaningful_right">
            <img
              src="https://purepng.com/public/uploads/thumbnail//love-heart-5yd.png"
              alt=""
              width={400}
              height={400}
            />
          </div>
          <div className=" Meaningful_left">
            <h4 className="text-4xl font-bold">💝 Meaningful</h4>
            <p className="p-8 text-lg">
             Suggestify isn’t just smart, it’s heartfelt. Built for connection.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
