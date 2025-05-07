import React from "react";
// import heroImage from "../assets/Hero.jpg";

const Hero = () => {
  return (
    <section className="relative w-full h-[100vh]">  
      {/* Background Image */}
      <img src="/assets/Hero.jpg" alt="Hero" className="w-full h-full object-cover" />

      {/* Overlay layer */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center px-4 md:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Khám phá trải nghiệm tuyệt vời
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-xl mx-auto">
            Hãy cùng chúng tôi khám phá thế giới tuyệt đẹp với dịch vụ chất
            lượng và chuyên nghiệp.
          </p>
          <div className="flex justify-center gap-4">
            <button className="border border-gray-300 text-white px-6 py-3 rounded-xl hover:bg-gray-100 hover:text-black transition">
              Mua ngay
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
