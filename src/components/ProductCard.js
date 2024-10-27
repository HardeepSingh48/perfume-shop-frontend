import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div 
      className="p-4 border rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 cursor-pointer "
      onClick={() => navigate(`/product/${product._id}`)}
    >
      <div className="w-full h-40 flex items-center justify-center overflow-hidden rounded-t-md bg-white">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">{product.name}</h2>
        <p className="text-gray-500">{product.description}</p>
        <p className="text-lg font-bold mt-2">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
