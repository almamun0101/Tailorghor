import React from "react";

const genders = ["Male ", "Female "];
const sizes = ["ES","S","M","L","X","XL"]
const images = [
  {}
]
export const SchoolDress = ({schoolName }) => {

  return (
    <div className="pt-20">
      <div className="container px-5">
        <div className="my-3 p-2 rounded-2xl border ">
          <h2 className="text-lg p-1">Uniform For {schoolName}</h2>
        </div>
        <div className="flex gap-2 w-full text-black text-center justify-around">
         <select name="" id="gender" className="border w-1/2 rounded-2xl p-2">
            <option value="">Select Gender</option>
            {
              genders.map((gender)=>(
              <option key={gender} value={gender}>{gender}</option>
            ))
            }
         </select>
          <select name="" id="size" className="border w-1/2 rounded-2xl p-2">
            <option value="Select Size">Select Size</option>
            {
              sizes.map((size)=>(
                <option key={size} value={size}>{size}</option>
              ))
            }
          </select>

        </div>
        <div className="w-full py-4">

          <img src="./boy.png" alt="" />
        </div>
        <div className="flex gap-2">
          <button className="bg-pri w-1/2 rounded-2xl p-2  text-sec text-lg font-bold">Order</button>
          <button className="bg-pri w-1/2 rounded-2xl p-2  text-sec text-lg font-bold">Add To Chart</button>
        </div>
      </div>
    </div>
  );
};
