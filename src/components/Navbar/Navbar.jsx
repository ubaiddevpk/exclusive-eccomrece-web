import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import { FiShoppingCart, FiUser, FiBox, FiXCircle, FiStar, FiLogOut } from "react-icons/fi";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { useAuth } from "../../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { toast } from "react-toastify";

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user } = useAuth();

  const isMinimalPage = ["/login", "/register"].includes(pathname);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Successfully logged out!");
      navigate("/login");
    } catch (error) {
      toast.error("Logout failed!");
    }
  };

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  return (
    <div className="w-full bg-white shadow-sm border-b border-gray-200 z-50">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Navbar Top */}
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="text-xl font-bold text-gray-800">Exclusive</Link>

          {/* Mobile Search */}
          <div className="flex-1 mx-2 block md:hidden">
            <div className="relative w-full max-w-sm mx-auto">
              <input
                type="text"
                placeholder="Search"
                className="w-full pr-8 pl-3 py-[6px] text-sm border border-gray-300 rounded-md focus:outline-none"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
                <AiOutlineSearch size={18} />
              </button>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl text-gray-700"
          >
            {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex space-x-6 ml-6">
            <li><Link to="/" className="hover:text-purple-600">Home</Link></li>
            <li><Link to="/contact" className="hover:text-purple-600">Contact</Link></li>
            <li><Link to="/about" className="hover:text-purple-600">About</Link></li>
            {!user && <li><Link to="/register" className="hover:text-purple-600">Sign Up</Link></li>}
          </ul>

          {/* Desktop Search */}
          {!isMinimalPage && (
            <div className="flex-1 mx-4 max-w-md hidden md:block relative">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="w-full pr-10 pl-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-purple-600">
                <AiOutlineSearch size={20} />
              </button>
            </div>
          )}

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-4 min-w-[150px]">
            {!isMinimalPage && (
              <>
                <Link to="/wishlist" className="hover:text-purple-600"><AiOutlineHeart size={22} /></Link>
                <Link to="/cart" className="hover:text-purple-600"><FiShoppingCart size={22} /></Link>

                {user && (
                  <div className="relative">
                    <img
                      src={user.photoURL || "https://i.pravatar.cc/300"}
                      alt="User"
                      onClick={toggleDropdown}
                      className="w-8 h-8 rounded-full cursor-pointer"
                    />
                    {dropdownOpen && (
                      <div className="absolute right-0 mt-2 w-56 bg-white border rounded shadow-lg z-50 text-sm">
                        <Link to="/account" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"><FiUser /> Manage My Account</Link>
                        <Link to="/orders" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"><FiBox /> My Orders</Link>
                        <Link to="/cancellations" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"><FiXCircle /> My Cancellations</Link>
                        <Link to="/reviews" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"><FiStar /> My Reviews</Link>
                        <button onClick={handleLogout} className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-red-600"><FiLogOut /> Logout</button>
                      </div>
                    )}
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden mt-2 space-y-2 pb-4 border-t pt-2">
            <Link to="/" className="block hover:text-purple-600">Home</Link>
            <Link to="/contact" className="block hover:text-purple-600">Contact</Link>
            <Link to="/about" className="block hover:text-purple-600">About</Link>
            {!user && <Link to="/register" className="block hover:text-purple-600">Sign Up</Link>}

            {user && (
              <div className="space-y-2 mt-2 px-2 text-sm">
                <Link to="/account" className="flex items-center gap-2 py-1"><FiUser /> Manage My Account</Link>
                <Link to="/orders" className="flex items-center gap-2 py-1"><FiBox /> My Orders</Link>
                <Link to="/cancellations" className="flex items-center gap-2 py-1"><FiXCircle /> My Cancellations</Link>
                <Link to="/reviews" className="flex items-center gap-2 py-1"><FiStar /> My Reviews</Link>
                <button onClick={handleLogout} className="flex items-center gap-2 text-red-600 py-1"><FiLogOut /> Logout</button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
