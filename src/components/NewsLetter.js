import React from 'react';

const NewsLetter = () => {
  return (
    <section className="bg-gray-100 py-10 text-center">
      <h2 className="text-3xl font-bold mb-4">Subscribe to our Newsletter</h2>
      <p className="mb-6">Get updates about our latest offers</p>
      <form className="flex justify-center">
        <input type="email" placeholder="Enter your email" className="p-2 w-1/2 border border-gray-400" />
        <button className="bg-black text-white p-2">Subscribe</button>
      </form>
    </section>
  );
};

export default NewsLetter;
