// src/components/SidebarCategories.jsx
import React from "react";

const categories = [
  "Woman's Fashion",
  "Men's Fashion",
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby’s & Toys",
  "Groceries & Pets",
  "Health & Beauty",
];

const SidebarCategories = () => {
  return (
    <aside className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 sm:p-4 bg-white shadow-sm rounded-md max-w-xs mx-auto md:mx-0">
      <ul className="grid grid-cols-2 md:grid-cols-2 gap-2 md:gap-0 text-xs sm:text-sm font-semibold text-gray-700">
        {categories.map((cat, index) => (
          <li
            key={index}
            className="cursor-pointer hover:text-blue-600 transition px-2 py-2 rounded-md hover:bg-blue-50 text-center md:text-left border border-gray-100"
          >
            {cat}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SidebarCategories;
