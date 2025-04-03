import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const OrderPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [orderItems, setOrderItems] = useState(() => {
    const savedItems = localStorage.getItem('cartItems');
    return savedItems ? JSON.parse(savedItems) : [];
  });
  
  useEffect(() => {
    const addProduct = () => {
      if (state?.product) {
        setOrderItems(prevItems => {
          // Check if product already exists
          if (prevItems.some(item => item.id === state.product.id)) {
            return prevItems;
          }
          
          // Add new product with unique orderId
          const newProduct = {
            ...state.product,
            orderId: `${state.product.id}-${Date.now()}`
          };
          
          const updatedItems = [...prevItems, newProduct];
          localStorage.setItem('cartItems', JSON.stringify(updatedItems));
          return updatedItems;
        });

        // Clear navigation state
        navigate('.', { replace: true, state: null });
      }
    };

    addProduct();
  }, [state, navigate]);

  const removeLastItem = () => {
    setOrderItems(prevItems => {
      const updatedItems = prevItems.slice(0, -1);
      localStorage.setItem('cartItems', JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  const calculateTotal = () => {
    return orderItems.reduce((sum, item) => sum + parseFloat(item.price), 0).toFixed(2);
  };

  if (!orderItems.length) {
    return <div className="p-4 text-center text-xl">No items in cart</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Order Details ({orderItems.length} items)</h1>
        <button 
          onClick={removeLastItem}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Remove Last Item
        </button>
      </div>
      
      <div className="space-y-4">
        {orderItems.map((product) => (
          <div key={product.orderId} className="bg-white rounded-lg shadow p-6">
            <div className="flex gap-6">
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-64 h-64 object-cover rounded"
              />
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-2">{product.title}</h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <p className="text-green-600 font-bold text-lg mb-2">${product.price}</p>
                <p className="text-blue-600 mb-4">Shop: {product.shop}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold">Total:</span>
          <span className="text-2xl text-green-600 font-bold">${calculateTotal()}</span>
        </div>
        <button className="w-full mt-4 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default OrderPage;