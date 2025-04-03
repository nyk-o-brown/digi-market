// src/components/Products.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Products = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Fetch products with category filter
        const url = category 
          ? `http://localhost:3000/products?category=${category}`
          : 'http://localhost:3000/products';
          
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(`Failed to fetch products: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]); // Add category as dependency

  const handleAddToOrder = (product) => {
    navigate('/order', { state: { product } });
  };

  if (loading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow hover:shadow-lg relative group">
            <div className="relative">
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-48 object-cover mb-4"
              />
              <button
                onClick={() => handleAddToOrder(product)}
                className="absolute top-2 right-2 w-8 h-8 bg-green-500 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center hover:bg-green-600"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  className="w-5 h-5"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 4v16m8-8H4" 
                  />
                </svg>
              </button>
            </div>
            <h2 className="text-xl font-bold mb-2">{product.title}</h2>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <p className="text-green-600 font-bold">${product.price}</p>
            <div className="mt-2">
              <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                {product.shop}
              </span>
            </div>
            <div className="flex items-center mt-2">
              <span className="text-yellow-500">★</span>
              <span className="ml-1">{product.rating.rate}</span>
              <span className="ml-2 text-gray-500">({product.rating.count} reviews)</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;