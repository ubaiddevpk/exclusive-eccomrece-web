import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import playstore from "./playstore.png";
import applestore from "./applestore.png";
import qrcode from "./qrcode.jpg";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Foter = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <footer className="bg-black text-white w-full">
      <div className="w-full max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 text-left">
          {/* Exclusive */}
          <motion.div data-aos="fade-up" className="space-y-6">
            <h3 className="text-xl font-bold text-white">Exclusive</h3>
            <p className="text-gray-300">
              Get <span className="text-purple-400 font-bold">10% off</span> your first order
            </p>
            <form className="flex overflow-hidden border border-none bg-white rounded-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 flex-1 text-black focus:outline-none"
              />
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 font-semibold transition">
                Subscribe
              </button>
            </form>
          </motion.div>

          {/* Support */}
          <motion.div data-aos="fade-up" className="space-y-6">
            <h3 className="text-xl font-bold text-white">Support</h3>
            <ul className="text-gray-300 space-y-1">
              <li><b>Address:</b> III Bijoy sarani, Dhaka.</li>
              <li><b>Branch:</b> DH 15/5, Bangladesh.</li>
              <li>
                <b>Email:</b>{" "}
                <a href="mailto:exclusiv@gmail.com" className="underline hover:text-purple-400">exclusiv@gmail.com</a>
              </li>
              <li>
                <b>Phone:</b>{" "}
                <a href="tel:+8801588889999" className="underline hover:text-purple-400">+88015-8888-9999</a>
              </li>
            </ul>
          </motion.div>

          {/* Account */}
          <motion.div data-aos="fade-up" className="space-y-6">
            <h3 className="text-xl font-bold text-white">Account</h3>
            <ul className="text-gray-300 space-y-1">
              <li><a href="#" className="hover:text-purple-400">My Account</a></li>
              <li><a href="#" className="hover:text-purple-400">Login / Register</a></li>
              <li><a href="#" className="hover:text-purple-400">Cart</a></li>
              <li><a href="#" className="hover:text-purple-400">Wishlist</a></li>
              <li><a href="#" className="hover:text-purple-400">Shop</a></li>
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div data-aos="fade-up" className="space-y-6">
            <h3 className="text-xl font-bold text-white">Quick Links</h3>
            <ul className="text-gray-300 space-y-1">
              <li><a href="#" className="hover:text-purple-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-purple-400">Terms Of Use</a></li>
              <li><a href="#" className="hover:text-purple-400">FAQ</a></li>
              <li><a href="#" className="hover:text-purple-400">Contact</a></li>
            </ul>
          </motion.div>

          {/* Download App + Socials */}
          <motion.div data-aos="fade-up" className="space-y-6">
            <h3 className="text-xl font-bold text-white">Download App</h3>
            <p className="text-gray-300">
              Save <span className="text-purple-400 font-bold">$3</span> with App New User Only
            </p>
            <div className="flex items-center space-x-4">
              <img src={qrcode} alt="QR Code" className="w-20 h-20 border rounded-md" />
              <div className="flex flex-col space-y-2">
                <img src={playstore} alt="Play Store" className="w-32 h-12 object-contain bg-white rounded" />
                <img src={applestore} alt="App Store" className="w-32 h-12 object-contain bg-white rounded" />
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-4 text-2xl text-white">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400"><FaFacebookF /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400"><FaTwitter /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400"><FaInstagram /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400"><FaLinkedinIn /></a>
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} <span className="text-white font-bold">Exclusive</span>. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-purple-400">Terms</a>
            <a href="#" className="hover:text-purple-400">Privacy</a>
            <a href="#" className="hover:text-purple-400">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Foter;
