import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Text Content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Khám phá xu hướng mới nhất <br /> cùng <span className="text-indigo-600">ShopStyle</span>
          </h1>
          <p className="mt-6 text-gray-700 text-lg">
            Thời trang đỉnh cao - giá cả phải chăng. Mua sắm ngay hôm nay để nhận ưu đãi hấp dẫn!
          </p>
          <div className="mt-8">
            <a
              href="#products"
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-xl text-lg font-medium hover:bg-indigo-700 transition"
            >
              Mua ngay
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="https://source.unsplash.com/600x500/?fashion,clothes"
            alt="Fashion Hero"
            className="w-full max-w-md rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
