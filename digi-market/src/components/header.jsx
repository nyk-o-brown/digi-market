import React from 'react'

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-gray-800">
            DigiMarket
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-600 hover:text-gray-900 transition duration-300">
              Home
            </a>
            <a href="/products" className="text-gray-600 hover:text-gray-900 transition duration-300">
              Products
            </a>
            <a href="/about" className="text-gray-600 hover:text-gray-900 transition duration-300">
              About
            </a>
            <a href="/contact" className="text-gray-600 hover:text-gray-900 transition duration-300">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header