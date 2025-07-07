import React, { useState } from 'react';
import { FiSmartphone, FiMonitor, FiTv, FiHome, FiHeadphones, FiCpu } from 'react-icons/fi';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';

const categories = [
  { name: 'Phones', icon: <FiSmartphone size={24} /> },
  { name: 'Computers', icon: <FiMonitor size={24} /> },
  { name: 'Television', icon: <FiTv size={24} /> },
  { name: 'Camera', icon: <FiHome size={24} /> },
  { name: 'Headphone', icon: <FiHeadphones size={24} /> },
  { name: 'Gaming', icon: <FiCpu size={24} /> },
];

const CategoryBrowser = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="w-full py-8 px-4 md:px-0">
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-red-500 text-sm font-semibold">Categories</p>
          <h2 className="text-2xl font-bold">Browse By Category</h2>
        </div>
        <div className="flex gap-2">
          <button className="p-2 border rounded-full text-gray-700 hover:bg-gray-100">
            <FiArrowLeft />
          </button>
          <button className="p-2 border rounded-full text-gray-700 hover:bg-gray-100">
            <FiArrowRight />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
        {categories.map((cat, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`flex flex-col items-center justify-center border rounded-md py-6 gap-2 
              ${activeIndex === index ? 'bg-red-500 text-white' : 'text-gray-700 hover:border-red-500'}
            `}
          >
            <div>{cat.icon}</div>
            <p className="text-sm font-medium">{cat.name}</p>
          </button>
        ))}
      </div>
    </section>
  );
};

export default CategoryBrowser;
