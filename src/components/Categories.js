import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 1,
    title: 'Thời trang Nam',
    img: 'https://i.pinimg.com/736x/f0/a3/03/f0a303dadacb992b9e574f537ae0d6b5.jpg',
    link: '/category/men',
    alt: 'Danh mục thời trang nam'
  },
  {
    id: 2,
    title: 'Thời trang Nữ',
    img: 'https://i.pinimg.com/736x/e9/0c/e3/e90ce3d39454a9f398708421e1be590d.jpg',
    link: '/category/women',
    alt: 'Danh mục thời trang nữ'
  },
  {
    id: 3,
    title: 'Thời trang Trẻ em',
    img: 'https://i.pinimg.com/736x/36/a9/cd/36a9cd460bd5cad2021144528be4ead0.jpg',
    link: '/category/kids',
    alt: 'Danh mục thời trang trẻ em'
  },
];

const Categories = () => {
  return (
    <section
      aria-labelledby="danh-muc-noi-bat"
      className="max-w-7xl mx-auto px-4 py-10"
    >
      <header className="mb-8 text-center">
        <h2
          id="danh-muc-noi-bat"
          className="text-3xl font-bold uppercase tracking-wide text-gray-800"
        >
          Danh mục nổi bật
        </h2>
        <p className="text-gray-600 mt-2">Khám phá các danh mục thời trang phổ biến nhất</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <article key={category.id} className="group rounded-xl overflow-hidden shadow-md">
            <Link to={category.link} title={category.title}>
              <figure className="relative w-full h-[450px]">
                <img
                  src={category.img}
                  alt={category.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <figcaption className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-semibold tracking-wide">
                    {category.title}
                  </h3>
                </figcaption>
              </figure>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Categories;
