import React from 'react';
import { Link } from 'react-router-dom';

const PromotionBanner = () => {
  return (
    <section
      className="relative overflow-hidden min-h-[600px] py-20 px-6 text-white text-center rounded-3xl shadow-2xl my-12 flex items-center justify-center"
      role="banner"
      aria-labelledby="promotion-title"
      style={{
        backgroundImage: "url('https://i.pinimg.com/736x/b9/5c/b0/b95cb008cc4537837492d1f540ef068c.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h2
          id="promotion-title"
          className="text-5xl md:text-6xl font-extrabold uppercase tracking-wider mb-6 drop-shadow-md"
        >
          Sale Mùa Hè <span className="text-yellow-300">50% OFF</span>!
        </h2>
        <p className="text-lg md:text-xl font-light mb-8">
          Nhanh tay mua sắm với ưu đãi cực lớn, chỉ trong thời gian có hạn!
        </p>
        <Link
          to="/sale"
          aria-label="Truy cập trang khuyến mãi mùa hè"
          className="inline-block bg-white text-red-600 hover:text-white hover:bg-red-600 font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 ease-in-out shadow-lg hover:scale-105"
        >
          Mua ngay
        </Link>
      </div>
    </section>
  );
};

export default PromotionBanner;
