// src/components/AddReviewForm.js

import React, { useState } from 'react';
import axios from 'axios';

const AddReviewForm = ({ productId }) => {
  const [user, setUser] = useState('');
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await axios.post(`http://localhost:5000/api/reviews`, {
        productId,
        user,
        rating,
        comment,
      });
      setSuccess('Review added successfully!');
      // Optionally reset the form
      setUser('');
      setRating(1);
      setComment('');
    } catch (err) {
      setError('Failed to add review. Please try again.');
      console.error(err);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Add a Review</h2>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="user" className="block mb-1">Name:</label>
          <input
            type="text"
            id="user"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            required
            className="border border-gray-300 rounded p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="rating" className="block mb-1">Rating:</label>
          <select
            id="rating"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            required
            className="border border-gray-300 rounded p-2 w-full"
          >
            {[1, 2, 3, 4, 5].map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="comment" className="block mb-1">Comment:</label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
            className="border border-gray-300 rounded p-2 w-full"
            rows="4"
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default AddReviewForm;
