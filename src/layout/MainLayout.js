import React, { Children } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';


const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Nội dung chính ở đây */}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
