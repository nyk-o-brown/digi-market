import React from 'react'


const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-[#52EA5A]">
            Digi-Market
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-600 hover:text-gray-900 transition duration-300">
              Home
            </a>
            <a href="/Orderpage" className="text-gray-600 hover:text-gray-900 transition duration-300">
              View your orders
            </a>
            <a href="/AddProduct" className="text-gray-600 hover:text-gray-900 transition duration-300">
              Add product to ur virtual store
            </a>
            <a href="/Legalandinfo" className="text-gray-600 hover:text-gray-900 transition duration-300">
              Contact ang Legal information
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header