import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="text-2xl font-bold">ClothingStore</div>
      <div className="space-x-6">
        <a href="#" className="hover:text-gray-700">Home</a>
        <a href="#" className="hover:text-gray-700">Shop</a>
        <a href="#" className="hover:text-gray-700">Contact</a>
        <a href="#" className="hover:text-gray-700">About</a>
      </div>
    </nav>
  );
};

export default Navbar;
