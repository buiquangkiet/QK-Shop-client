import React from 'react';
import MainLayout from '../layout/MainLayout';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import FeaturedProducts from '../components/FeaturedProducts';
import PromotionBanner from '../components/PromotionBanner';
import NewsLetter from '../components/NewsLetter';

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <PromotionBanner />
      <NewsLetter />
    </MainLayout>
  );
};

export default Home;
