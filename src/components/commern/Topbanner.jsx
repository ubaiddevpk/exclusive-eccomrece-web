import React, { useState, useEffect, useRef } from "react";

const TopBanner = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="hidden md:block bg-black text-white text-sm w-full">
      <div className="max-w-screen-xl mx-auto px-4 py-2 flex justify-between items-center">
        <p className="text-center md:text-left">
          Summer Sale For All Swim Suits And Free Express Delivery —
          <span className="font-semibold"> OFF 50%</span>!
          <a href="#" className="underline ml-1 hover:text-purple-400">
            ShopNow
          </a>
        </p>

        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="text-white focus:outline-none"
          >
            English ▼
          </button>

          {dropdownOpen && (
            <ul className="absolute right-0 mt-2 bg-white text-black shadow-lg rounded w-32 z-[9999]">
              <li>
                <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                  English
                </button>
              </li>
              <li>
                <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                  Urdu
                </button>
              </li>
              <li>
                <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                  Arabic
                </button>
              </li>
              <li>
                <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                  French
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
