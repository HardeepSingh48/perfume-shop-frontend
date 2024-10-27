import React, { useEffect, useState } from 'react';
import { fetchProductById, fetchReviewsByProductId } from '../services/api';
import { useParams } from 'react-router-dom';
import AddReviewForm from '../components/AddReview';

import { useNavigate } from 'react-router-dom';

const ProductPage = () => {
    const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getProductData = async () => {
      try {
        const response = await fetchProductById(id);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    const getReviews = async () => {
      try {
        const response = await fetchReviewsByProductId(id);
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    getProductData();
    getReviews();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <img src={product.images[0]} alt={product.name} className="w-full h-64 object-contain rounded-md"/>
        <div>
          <p className="text-lg">{product.description}</p>
          <p className="text-xl font-semibold mt-2">${product.price}</p>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700" 
          onClick={() => navigate('intagram.com')}>
            Share on Social Media
          </button>
        </div>
      </div>

      <div className="mt-6">
      <AddReviewForm productId={id} />
      <h2 className="text-xl font-semibold mt-6">Reviews:</h2>
          {reviews.length > 0 ? (
            reviews.map((review) => (
              <div key={review._id} className="border-b border-gray-300 py-2">
                <h3 className="font-bold">{review.user}</h3>
                <p>Rating: {review.rating}</p>
                <p>{review.comment}</p>
              </div>
            ))
          ) : (
            <p>No reviews yet.</p>
          )}
      </div>
    </div>
  );
};

export default ProductPage;
