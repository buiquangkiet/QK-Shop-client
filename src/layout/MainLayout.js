import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';


const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-[80px]">
        {/* Nội dung chính ở đây */}
      <Outlet/>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
