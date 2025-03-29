import React from "react";

export const Banner = () => {
  return (
    <>
    <div className="container">
      <img src="." alt="" />
      <div className="p-5">
        <h2 className="text-3xl font-light ">Good Morning Dear</h2>
        <h2 className="pt-5">Find your Closet Home Tailor </h2>
      </div>

      <div className="px-5 pb-2 border rounded-2xl m-2 p-2">
        <h2>Mirpur , Dhaka</h2>
      </div>

      <div className="grid grid-cols-2 gap-2 px-2">
        <div className="border rounded-2xl flex flex-col justify-center items-center p-3  hover:bg-pri hover:text-sec transition">
      <img src="./trade.png" alt="" />
        <button className="mt-2 rounded-2xl p-2">Trade</button>
        </div>
        <div className="border rounded-2xl flex flex-col justify-center items-center p-3  hover:bg-pri hover:text-sec transition">
      <img src="./machine.png" alt="" />
        <button className="mt-2 rounded-2xl p-2">Home</button>
        </div>
   
      </div>


    </div>

    </>
  );
};
