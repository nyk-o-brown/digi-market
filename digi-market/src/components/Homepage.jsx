import React from 'react'

export const CardGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      <div title="card de cosmetics" className="border p-4 rounded hover:shadow-lg">
        <h2 className="text-xl font-bold mb-2">Cosmetics</h2>
        <p className="text-gray-700">Explore our range of cosmetics.</p>
      </div>

      <div title="card de appliances" className="border p-4 rounded hover:shadow-lg">
        <h2 className="text-xl font-bold mb-2">Appliances</h2>
        <p className="text-gray-700">Discover the latest appliances.</p>
      </div>

      <div title="card de hardware " className="border p-4 rounded hover:shadow-lg">
        <h2 className="text-xl font-bold mb-2">Hardware</h2>
        <p className="text-gray-700">Find the best hardware products.</p>
      </div>

      <div title="card de foodstufs" className="border p-4 rounded hover:shadow-lg">
        <h2 className="text-xl font-bold mb-2">Cosmetics</h2>
        <p className="text-gray-700">Explore our range of cosmetics.</p>
      </div>

      <div title="card de services" className="border p-4 rounded hover:shadow-lg">
        <h2 className="text-xl font-bold mb-2">Services</h2>
        <p className="text-gray-700">Discover our services.</p>   
      </div>        
    </div>
  )
}

function Grid(){
    return <CardGrid />
}

export default Grid



