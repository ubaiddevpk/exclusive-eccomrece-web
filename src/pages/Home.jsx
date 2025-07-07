import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion"; // ✅ Framer Motion

// Import your components
import HeroCarousel from "../components/carousel/HeroCarousel";
import SidebarCategories from "../components/categry/SidebarCategories";
import ProductCarousel from "../components/carousel/ProductCarousel";
import CategoryBrowser from "../components/categry/CategoryBrowser";
import HeroBanner from "../components/commern/HeroBanner";
import NewArrival from "../components/commern/NewArrival";
import ServiceFeatures from "../components/commern/ServiceFeatures";

const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <motion.section
        className="max-w-screen-xl mx-auto px-4 py-6 md:py-10 flex flex-col md:flex-row gap-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <SidebarCategories />
        <HeroCarousel />
      </motion.section>

      {/* Flash Sales */}
      <section data-aos="fade-up" className="max-w-screen-xl mx-auto px-4 py-12">
        <ProductCarousel
          title="Flash Sales"
          timer={{ Days: 3, Hours: 23, Minutes: 19, Seconds: 56 }}
          buttonLabel="View All Products"
          limit={8}
          sort="desc"
        />
      </section>

      {/* Browse by Category */}
      <section data-aos="fade-up" className="max-w-screen-xl mx-auto px-4 py-12">
        <CategoryBrowser />
      </section>

      {/* Best Selling */}
      <motion.section
        className="max-w-screen-xl mx-auto px-4 py-12"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ProductCarousel
          title="Best Selling"
          buttonLabel="View Best Sellers"
          limit={8}
        />
      </motion.section>

      {/* Hero Banner */}
      <section data-aos="fade-up" className="max-w-screen-xl mx-auto px-4 py-12">
        <HeroBanner />
      </section>

      {/* Explore Our Products */}
      <section data-aos="fade-up" className="max-w-screen-xl mx-auto px-4 py-12">
        <ProductCarousel
          title="Explore Our Products"
          buttonLabel="Explore More"
          limit={8}
        />
      </section>

      {/* New Arrival */}
      <motion.section
        className="max-w-screen-xl mx-auto px-4 py-12"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <NewArrival />
      </motion.section>

      {/* Service Features */}
      <section data-aos="fade-up" className="max-w-screen-xl mx-auto px-4 py-12">
        <ServiceFeatures />
      </section>
    </div>
  );
};

export default HomePage;
