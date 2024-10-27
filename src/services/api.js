import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const fetchProducts = () => API.get('/products');
export const fetchProductById = (id) => API.get(`/products/${id}`);
export const fetchReviewsByProductId = async (id) =>{ return await API.get(`/reviews/${id}`)};
export const addReview = async (review) => {
    try {
      const response = await axios.post('http://localhost:5000/api/reviews', review);
      return response.data;
    } catch (error) {
      console.error('Error adding review:', error);
      throw error;
    }
  };
