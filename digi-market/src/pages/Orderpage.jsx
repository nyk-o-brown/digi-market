import React from 'react';
import { useLocation } from 'react-router-dom';

const OrderPage = () => {
  const { state } = useLocation();
  const product = state?.product;

  if (!product) {
    return <div className="p-4">No product selected</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Order Details</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex gap-6">
          <img 
            src={product.image} 
            alt={product.title} 
            className="w-64 h-64 object-cover rounded"
          />
          <div>
            <h2 className="text-xl font-bold mb-2">{product.title}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-green-600 font-bold text-lg mb-2">${product.price}</p>
            <p className="text-blue-600 mb-4">Shop: {product.shop}</p>
            <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;