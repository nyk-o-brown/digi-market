import React from 'react';
import AddProductForm from '../components/AddProductForm';

function AddProduct() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Add New Product</h1>
      <AddProductForm />
    </div>
  );
}

export default AddProduct;