// components/ServiceFeatures.jsx
import React from "react";
import { FaTruck, FaHeadset, FaShieldAlt } from "react-icons/fa";

const features = [
  { icon: <FaTruck />, title: "Free and Fast Delivery", desc: "Free delivery for all orders over $100" },
  { icon: <FaHeadset />, title: "24/7 Customer Service", desc: "Friendly 24/7 customer support" },
  { icon: <FaShieldAlt />, title: "Money Back Guarantee", desc: "We return money within 30 days" },
];

const ServiceFeatures = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-10 border-t mt-8">
      {features.map((feature, idx) => (
        <div key={idx} className="flex flex-col items-center text-center">
          <div className="text-3xl text-purple-600 mb-2">{feature.icon}</div>
          <h4 className="font-semibold">{feature.title}</h4>
          <p className="text-gray-500 text-sm">{feature.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceFeatures;
