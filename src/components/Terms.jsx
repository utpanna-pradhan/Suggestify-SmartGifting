import React from "react";

function Terms() {
  return (
    <div className="flex flex-col md:flex-row gap-5 justify-center items-center mx-auto p-12">
      <div className="w-full md:w-2/3">
        <h1 className="font-bold text-5xl mb-4 font_red">
          Terms and condition
        </h1>
        <p className="mt-4 mb-4">
          This is a personal project for demonstration.
        </p>
        <p className="mt-4 mb-4">We do not sell actual products.</p>
        <p className="mt-4 mb-4">
          All suggestions are AI-generated and may not reflect real-time product
          availability.
        </p>
        <p className="mt-4 mb-4">User data is not stored or shared with third parties.</p>
        <p className="mt-4 mb-4">For any issues, contact Utpanna828@gmail.com</p>
        <button className="bg-red-700 text-white pt-3 pb-3 pl-5 pr-5 rounded-full mt-8">
          Learn More
        </button>
      </div>
      <div className="w-full md:w-1/3">
        <img
          src="https://png.pngtree.com/png-vector/20240604/ourmid/pngtree-vector-of-terms-and-conditions-concept-flat-modern-png-image_12621723.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Terms;
