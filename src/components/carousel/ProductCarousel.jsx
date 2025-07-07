import React, { useEffect, useState } from 'react';
import { AiOutlineHeart, AiFillStar } from 'react-icons/ai';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';

const ProductCarousel = ({ title, timer, buttonLabel, limit = 8, sort = '' }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = `https://dummyjson.com/products?limit=${limit}${sort ? `&sort=${sort}` : ''}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setProducts(data.products))
      .catch(err => setError('Failed to load products.'));
  }, [limit, sort]);

  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <section className="w-full py-6">
      <div className="flex justify-between items-center px-4 md:px-0 mb-4">
        <div className="flex items-center gap-2">
          <p className="text-red-500 font-semibold text-sm">Today’s</p>
          <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
          {timer && (
            <div className="flex items-center gap-2 text-xs md:text-sm font-semibold text-gray-600">
              {Object.entries(timer).map(([key, value]) => (
                <span key={key}>
                  {String(value).padStart(2, '0')} <span className="text-red-500">{key}</span>
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="flex space-x-2">
          <button className="p-2 border rounded-full text-gray-700 hover:bg-gray-100">
            <FiArrowLeft />
          </button>
          <button className="p-2 border rounded-full text-gray-700 hover:bg-gray-100">
            <FiArrowRight />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-4 md:px-0">
        {products.map(p => (
          <div key={p.id} className="border rounded-md shadow hover:shadow-md overflow-hidden">
            <div className="relative p-2">
              {p.discountPercentage && (
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded">
                  -{Math.round(p.discountPercentage)}%
                </span>
              )}
              <img src={p.thumbnail} alt={p.title} className="w-full h-40 object-contain" />
              <button className="absolute top-2 right-2 text-gray-700 hover:text-red-500">
                <AiOutlineHeart />
              </button>
            </div>
            <div className="p-3 text-sm">
              <h4 className="font-semibold truncate">{p.title}</h4>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-red-500 font-bold">${p.price}</span>
                {p.price && p.discountPercentage && (
                  <span className="line-through text-gray-400">${(p.price / (1 - p.discountPercentage / 100)).toFixed(2)}</span>
                )}
              </div>
              <div className="flex items-center text-yellow-500 text-sm mt-1">
                {Array(5).fill(0).map((_, i) => <AiFillStar key={i} />)}
                <span className="text-gray-600 ml-1">({p.rating})</span>
              </div>
              <button className="mt-2 w-full py-1.5 text-sm font-semibold bg-black text-white rounded hover:bg-gray-800">
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {buttonLabel && (
        <div className="flex justify-center mt-6">
          <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600">
            {buttonLabel}
          </button>
        </div>
      )}
    </section>
  );
};

export default ProductCarousel;
