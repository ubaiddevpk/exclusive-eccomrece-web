import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "../components/Navbar/Navbar";
import Foter from "../components/foter/Foter";
import Topbanner from "../components/commern/Topbanner";

function Publiclayout() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    // Refresh AOS animations on route change
    AOS.refresh();
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Topbanner />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Foter />
    </div>
  );
}

export default Publiclayout;
