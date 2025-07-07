// components/NewArrival.jsx
import React, { useEffect, useState } from "react";

const NewArrival = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=4")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="my-12">
      <div className="mb-4">
        <p className="text-red-500 font-medium">Featured</p>
        <h2 className="text-xl font-bold">New Arrival</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative rounded overflow-hidden shadow hover:shadow-lg transition bg-white"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-contain p-4"
            />
            <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 px-2 py-1 text-white text-sm rounded">
              {product.category}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrival;
