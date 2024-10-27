import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
    <h1 className="text-2xl font-bold">Perfume Shop</h1>
    <ul className="flex gap-4">
      <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
      <li><Link to="/collections" className="hover:text-gray-300">Collections</Link></li>
    </ul>
  </nav>
);

export default Navbar;
