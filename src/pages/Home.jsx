// src/pages/HomePage.jsx
import React from "react";
import HeroCarousel from "../components/carousel/HeroCarousel";
import SidebarCategories from "../components/categry/SidebarCategories";
import ProductCarousel from "../components/carousel/ProductCarousel";
import CategoryBrowser from "../components/categry/CategoryBrowser";
import HeroBanner from "../components/commern/HeroBanner";
import NewArrival from "../components/commern/NewArrival";
import ServiceFeatures from "../components/commern/ServiceFeatures";

const HomePage = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="max-w-screen-xl mx-auto px-4 py-6 md:py-10 flex flex-col md:flex-row gap-4">
        <SidebarCategories />
        <HeroCarousel />
      </section>

      {/* Flash Sales */}
      <section className="max-w-screen-xl mx-auto px-4 py-12">
        <ProductCarousel
          title="Flash Sales"
          timer={{ Days: 3, Hours: 23, Minutes: 19, Seconds: 56 }}
          buttonLabel="View All Products"
          limit={8}
          sort="desc"
        />
      </section>

      {/* Browse by Category */}
      <section className="max-w-screen-xl mx-auto px-4 py-12">
        <CategoryBrowser />
      </section>

      {/* Best Selling */}
      <section className="max-w-screen-xl mx-auto px-4 py-12">
        <ProductCarousel
          title="Best Selling"
          buttonLabel="View Best Sellers"
          limit={8}
        />
      </section>

      {/* Hero Banner */}
      <section className="max-w-screen-xl mx-auto px-4 py-12">
        <HeroBanner />
      </section>

      {/* Explore Our Products */}
      <section className="max-w-screen-xl mx-auto px-4 py-12">
        <ProductCarousel
          title="Explore Our Products"
          buttonLabel="Explore More"
          limit={8}
        />
      </section>

      {/* New Arrival */}
      <section className="max-w-screen-xl mx-auto px-4 py-12">
        <NewArrival />
      </section>

      {/* Service Features */}
      <section className="max-w-screen-xl mx-auto px-4 py-12">
        <ServiceFeatures />
      </section>
    </div>
  );
};

export default HomePage;
