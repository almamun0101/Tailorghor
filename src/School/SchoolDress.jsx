import React, { useState } from "react";



const sizes = ["ES","S","M","L","X","XL"]

export const SchoolDress = ({schoolName }) => {
  const [gender,setGender]=useState("girl");
  
  const handleChange = (e)=>{
    setGender(e.target.value);
  }

  const imgUrl = 
  gender==="boy"
  ?"./boy.png"
  :"./girl.png"

  return (
    <div className="pt-20">
      <div className="container px-5">
        <div className="my-3 p-2 rounded-2xl border ">
          <h2 className="text-lg p-1">Uniform For {schoolName}</h2>
        </div>
        <div className="flex gap-2 w-full text-black text-center justify-around">
        <select
        value={gender}
        onChange={handleChange}
        className="border w-1/2 rounded-2xl p-2"
      >
        {/* <option value="boy">Select Gender</option> */}
        <option value="girl">Girl</option>
        <option value="boy">Boy</option>
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
        <div className="w-full mx-auto py-4">
          <img src={imgUrl} alt="" className="h-2/2 mx-auto"/>

        </div>
        <div className="flex gap-2">
          <button className="bg-pri w-1/2 rounded-2xl p-2  text-sec text-lg font-bold">Order</button>
          <button className="bg-pri w-1/2 rounded-2xl p-2  text-sec text-lg font-bold">Add To Chart</button>
        </div>
      </div>
    </div>
  );
};
