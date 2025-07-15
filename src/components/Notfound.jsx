import React from "react";

function Notfound() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center">
      <div className="w-1/2">
        <h1 className="font-bold text-9xl font_red">OOP's</h1>
        <h2 className="font-bold text-3xl font_red">
          The Page You were Looking for was not found
        </h2>
      </div>
      <img
        src="https://static.vecteezy.com/system/resources/previews/019/633/898/non_2x/404-error-in-desktop-free-png.png"
        alt="page not found"
        className="w-1/2"
      />
    </div>
  );
}

export default Notfound;
