import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../services/api';
import ProductCard from '../components/ProductCard';
import Banner from '../components/Banner';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchProducts();
      setProducts(response.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Banner />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-semibold text-center my-6">Our Latest Perfumes</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
