import React, { useState } from 'react';

const AddProductForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    description: '',
    category: '',
    shop: '',
    image: '',
    rating: { rate: 0, count: 0 }
  });

  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Create a preview URL
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);

      // Create a unique filename using timestamp
      const timestamp = new Date().getTime();
      const filename = `${timestamp}-${file.name}`;
      
      // Update form data with the image path
      setFormData({
        ...formData,
        image: `/images/${filename}`
      });

      // Handle file upload
      const formData = new FormData();
      formData.append('image', file);

      // Upload the file to public/images
      fetch('/api/upload', {
        method: 'POST',
        body: formData
      }).catch(error => console.error('Error uploading image:', error));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error('Failed to add product');
      alert('Product added successfully!');
      
      // Reset form
      setFormData({
        title: '',
        price: '',
        description: '',
        category: '',
        shop: '',
        image: '',
        rating: { rate: 0, count: 0 }
      });
      setImagePreview(null);
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to add product');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={(e) => setFormData({...formData, price: parseFloat(e.target.value)})}
            step="0.01"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={(e) => setFormData({...formData, category: e.target.value})}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            required
          >
            <option value="">Select a category</option>
            <option value="cosmetics">Cosmetics</option>
            <option value="appliances">Appliances</option>
            <option value="hardware">Hardware</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Shop</label>
          <select
            name="shop"
            value={formData.shop}
            onChange={(e) => setFormData({...formData, shop: e.target.value})}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            required
          >
            <option value="">Select a shop</option>
            <option value="Mama Janes">Mama Janes</option>
            <option value="Muthama and Sons">Muthama and Sons</option>
            <option value="Omosh Retailers">Omosh Retailers</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Product Image</label>
          <div className="mt-1 flex flex-col items-center">
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="w-32 h-32 object-cover mb-2"
              />
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="mt-1 block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Add Product
        </button>
      </div>
    </form>
  );
};

export default AddProductForm;