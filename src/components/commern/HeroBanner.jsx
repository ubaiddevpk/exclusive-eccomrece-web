// components/HeroBanner.jsx
import React from "react";
import heroproduct from "../../assets/heroimage.png"; // Adjust the path as necessary

const HeroBanner = () => {
  return (
    <div className="bg-black text-white rounded-lg overflow-hidden relative p-8 flex items-center justify-between">
      <div>
        <p className="text-green-400 mb-2">Enhance Your</p>
        <h2 className="text-3xl font-bold leading-tight">Music Experience</h2>
        <div className="flex items-center gap-4 mt-4">
          <div className="w-3 h-3 rounded-full bg-green-400" />
          <div className="w-3 h-3 rounded-full bg-white" />
          <div className="w-3 h-3 rounded-full bg-white" />
        </div>
        <button className="mt-6 px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md">
          Shop Now
        </button>
      </div>
      <img
        src={heroproduct}
        alt="Product"
        className="w-64"
      />
    </div>
  );
};

export default HeroBanner;
