import React from 'react';

const products = [
  { id: 1, name: 'Áo thun Basic', price: '$20', img: 'https://i.pinimg.com/736x/f3/a7/af/f3a7af1fec5e88e67ef16ce1de224475.jpg' },
  { id: 2, name: 'Quần Jeans Slim Fit', price: '$40', img: 'https://i.pinimg.com/736x/de/cf/18/decf18641c0bede4c63ae63dc0dc7537.jpg' },
  { id: 3, name: 'Áo khoác Jacket', price: '$60', img: 'https://i.pinimg.com/736x/11/06/9d/11069d52ed5f4e8e76cbe7d472e9a108.jpg' },
  { id: 4, name: 'Giày Sneakers', price: '$80', img: 'https://i.pinimg.com/736x/f7/75/fe/f775feff96a18da349424c7892026c63.jpg' },
];

const FeaturedProducts = () => {
  return (
    <section
      className="my-12 px-6 max-w-7xl mx-auto"
      aria-labelledby="featured-products-title"
    >
      <header className="text-center mb-8">
        <h2
          id="featured-products-title"
          className="text-3xl font-bold uppercase tracking-wide text-gray-800"
        >
          Sản phẩm nổi bật
        </h2>
        <p className="text-gray-600 mt-2">
          Những sản phẩm bán chạy và được yêu thích nhất
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <article
            key={product.id}
            className="border p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <figure>
              <img
                src={product.img}
                alt={`Hình ảnh sản phẩm: ${product.name}`}
                className="w-full h-[220px] object-cover rounded mb-4"
                loading="lazy"
              />
              <figcaption className="sr-only">{product.name}</figcaption>
            </figure>
            <h3 className="text-lg font-semibold text-gray-900">
              {product.name}
            </h3>
            <p className="text-red-600 font-medium">{product.price}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
