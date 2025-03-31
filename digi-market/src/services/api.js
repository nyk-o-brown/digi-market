// src/services/api.js
import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com';

// Get all products
export const getProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};