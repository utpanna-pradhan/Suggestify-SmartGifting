import React from 'react';
import {Link} from 'react-router-dom'

function Formsec() {
  return (
    <div className='mt-30 mb-30'>
        <h1 className='text-center font-semibold text-lg'>Fillup The Form</h1>
       <form className="flex flex-col justify-center items-center w-100 mx-auto  ">
            <label className="w-full mb-2">Age:</label>
            <input
              type="number"
              placeholder="Enter Your Age"
              className="mb-4 p-2 border rounded w-full"
            />

            <label className="w-full mb-2">Gender:</label>
            <div className="flex gap-4 mb-4">
              <label>
                <input type="radio" name="gender" value="female" /> Female
              </label>
              <label>
                <input type="radio" name="gender" value="male" /> Male
              </label>
              <label>
                <input type="radio" name="gender" value="others" /> Others
              </label>
            </div>

            <label className="w-full mb-2">Occasion:</label>
            <textarea
              placeholder="Enter Occasion"
              className="mb-4 p-2 border rounded w-full"
            ></textarea>

            <label className="w-full mb-2">Budget:</label>
            <input
              type="number"
              placeholder="Enter Budget"
              className="mb-4 p-2 border rounded w-full"
            />

            <label className="w-full mb-2">Interests:</label>
            <select className="mb-4 p-2 border rounded w-full">
              <option>Sports</option>
              <option>Singing</option>
              <option>Dancing</option>
            </select>

            <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition">
              <Link to='getgift'>
               Get Gifts
              </Link>
             
            </button>
          </form>
    </div>
  )
}

export default Formsec
