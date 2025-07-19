import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

function Formsec() {
  const [details, setDetails] = useState({
    age: "",
    gender: "",
    occasion: "",
    budget: "",
    interest: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const getGiftData = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    ).then(response => response.json())
      .then(json => console.log(json));
      const data = response.id;
      console.log("data is " + data);
  };
  useEffect(() => {
    const savedData = localStorage.getItem("myformsaveddata");
    if (savedData) {
      setDetails(JSON.parse(savedData));
    }
  }, []);
  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const validateForm = () => {
    const { age, gender, occasion, budget, interest } = details;
    if (!age || !gender || !occasion || !budget || !interest) {
      alert("Please fill up the fields");
    }
    if (parseInt(age) <= 0) {
      alert("Age must be greater than zero");
    }
    if (parseInt(budget) <= 0) {
      alert("Budget must be greater than zero");
    }
  };




  const handleSubmit = (e) => {
     getGiftData();
    e.preventDefault();
    if (!validateForm()) return;
   
    //console.log("Form submitted :" + details);

    localStorage.setItem("myformsaveddata", JSON.stringify(details));
    console.log("form data is saved to local storage");
    setDetails({
      age: "",
      gender: "",
      occasion: "",
      budget: "",
      interest: "",
    });
    setSubmitted(true);
  };
  const handleclear = () => {
    setDetails({
      age: "",
      gender: "",
      occasion: "",
      budget: "",
      interest: "",
    });
  };
  return (
    <div className="mt-30 mb-30">
      <h1 className="text-center font-bold text-4xl Pacificofont mb-8">
        Fillup The Form
      </h1>
      <form
        className="flex flex-col justify-center items-center w-100 mx-auto  "
        onSubmit={handleSubmit}
      >
        <label className="w-full mb-2">Age:</label>
        <input
          type="number"
          name="age"
          value={details.age}
          placeholder="Enter Your Age"
          className="mb-4 p-2 border rounded w-full"
          onChange={handleChange}
        />

        <label className="w-full mb-2">Gender:</label>
        <div className="flex gap-4 mb-4">
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={handleChange}
            />{" "}
            Female
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={handleChange}
            />{" "}
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="others"
              onChange={handleChange}
            />{" "}
            Others
          </label>
        </div>

        <label className="w-full mb-2">Occasion:</label>
        <textarea
          name="occasion"
          value={details.occasion}
          placeholder="Enter Occasion"
          className="mb-4 p-2 border rounded w-full"
          onChange={handleChange}
        ></textarea>

        <label className="w-full mb-2">Budget:</label>
        <input
          type="number"
          placeholder="Enter Budget"
          name="budget"
          value={details.budget}
          className="mb-4 p-2 border rounded w-full"
          onChange={handleChange}
        />

        <label className="w-full mb-2">Interests:</label>
        <select
          className="mb-4 p-2 border rounded w-full"
          name="interest"
          value={details.interest}
          onChange={handleChange}
        >
          <option value="">Select interest</option>
          <option value="Sports">Sports</option>
          <option value="Singing">Singing</option>
          <option value="Dancing">Dancing</option>
        </select>
        <div className="flex flex-row gap-4 form_btn mt-8 mb-8">
          <motion.button
            type="submit"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-50 bg-red-600 text-white px-5 py-2 rounded hover:bg-red-700 transition"
          >
            Get Gifts
          </motion.button>
          <motion.button
            onClick={handleclear}
            type="button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-50 bg-gray-700 text-white px-5 py-2 rounded hover:bg-gray-900 transition"
          >
            Clear
          </motion.button>
        </div>
      </form>
      {submitted && (
        <div className="text-center text-xl mt-8 mb-8 font-semibold  bg-green-100 rounded p-4">
          You will get a gift suggestion for {details.age} year's old{" "}
          {details.gender} for {details.occasion} having interest on{" "}
          {details.interest}{" "}
        </div>
      )}
    </div>
  );
}

export default Formsec;
