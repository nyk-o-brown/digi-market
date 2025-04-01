// src/components/Products.jsx
import React, { useEffect, useState } from 'react';

const Products = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow hover:shadow-lg">
            <img src={product.image} alt={product.title} className="w-full h-48 object-contain mb-2" />
            <h2 className="font-semibold">{product.title}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-green-600 font-bold mt-2">${product.price}</p>
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