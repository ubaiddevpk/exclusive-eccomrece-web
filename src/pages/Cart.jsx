import React from 'react'

export default function Cart() {
  return (
    <>
    {/* //create a cart page with a title and a message use tailwind css for styling */}
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Your Cart</h1>
      <p className="text-lg text-gray-700">Your cart is currently empty.</p>
      <p className="text-lg text-gray-700">Start shopping to add items to your cart!</p>
      </div>
    </>
  
  )
}
