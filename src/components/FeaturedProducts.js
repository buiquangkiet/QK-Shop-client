import React from 'react';

const products = [
  { id: 1, name: 'T-shirt Basic', price: '$20', img: '/path/to/product1.jpg' },
  { id: 2, name: 'Jeans Slim Fit', price: '$40', img: '/path/to/product2.jpg' },
  { id: 3, name: 'Jacket', price: '$60', img: '/path/to/product3.jpg' },
  { id: 4, name: 'Sneakers', price: '$80', img: '/path/to/product4.jpg' },
];

const FeaturedProducts = () => {
  return (
    <section className="my-10 px-6">
      <h2 className="text-3xl font-bold text-center mb-6">Featured Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg">
            <img src={product.img} alt={product.name} className="w-full h-[200px] object-cover mb-4" />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
