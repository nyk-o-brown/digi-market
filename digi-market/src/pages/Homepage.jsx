import React from 'react'
import { Link } from 'react-router-dom'

export const CardGrid = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-4 p-6">
      <Link to="/cosmetics" className="no-underline flex-1">
        <div className="h-[500px] border rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <img 
            src="/images/Cosmetics.jpg" 
            alt="Cosmetics"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Cosmetics</h2>
            <p className="text-gray-700 mb-4">Explore our range of cosmetics and beauty products. Find everything you need for your skincare routine.</p>
          </div>
        </div>
      </Link>

      <Link to="/appliances" className="no-underline flex-1">
        <div className="h-[500px] border rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <img 
            src="/images/Apppliances.jpg" 
            alt="Appliances"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Appliances</h2>
            <p className="text-gray-700 mb-4">Discover the latest appliances for your home. Modern solutions for modern living.</p>
          </div>
        </div>
      </Link>

      <Link to="/hardware" className="no-underline flex-1">
        <div className="h-[500px] border rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <img 
            src="/images/Hardwares.jpg" 
            alt="Hardware"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Hardware</h2>
            <p className="text-gray-700 mb-4">Find the best hardware products for your projects. Quality tools and materials.</p>
          </div>
        </div>
      </Link>

      <Link to="/services" className="no-underline flex-1">
        <div className="h-[500px] border rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <img 
            src="/images/Services.jpg" 
            alt="Services"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Services</h2>
            <p className="text-gray-700 mb-4">Discover our professional services. Expert solutions for all your needs.</p>
          </div>
        </div>
      </Link>        
    </div>
  )
}

export default CardGrid



