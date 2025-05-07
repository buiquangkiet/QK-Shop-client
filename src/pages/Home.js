import React from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import FeaturedProducts from '../components/FeaturedProducts';
import PromotionBanner from '../components/PromotionBanner';
import NewsLetter from '../components/NewsLetter';

const Home = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <PromotionBanner />
      <NewsLetter />
    </div>
  );
};

export default Home;
