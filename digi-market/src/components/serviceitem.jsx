import React, { useEffect, useState } from 'react';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('http://localhost:3000/products?category=services');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setServices(data);
      } catch (err) {
        setError(`Failed to fetch services: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) return <div className="p-4 text-center">Loading services...</div>;
  if (error) return <div className="p-4 text-red-500">{error}</div>;
  if (!services.length) return <div className="p-4 text-center">No services found</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {services.map(service => (
        <div key={service.id} className="border rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
          <div className="aspect-w-16 aspect-h-9 mb-4">
            {service.image ? (
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-48 object-cover rounded-md"
              />
            ) : (
              <div className="w-full h-48 bg-gray-200 rounded-md flex items-center justify-center">
                <span className="text-gray-500">No image available</span>
              </div>
            )}
          </div>
          <h2 className="text-xl font-bold mb-2">{service.title}</h2>
          <p className="text-gray-600 mb-4">{service.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-green-600 font-bold">
              {service.price ? `$${service.price}` : 'Price on request'}
            </span>
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
              {service.shop}
            </span>
          </div>
          <div className="flex items-center mt-2">
            <span className="text-yellow-500">★</span>
            <span className="ml-1">{service.rating.rate}</span>
            <span className="ml-2 text-gray-500">({service.rating.count} reviews)</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;