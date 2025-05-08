import React, { useState } from "react";
import { UserIcon, ShoppingCartIcon, MenuIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("NỮ");

  const categories = {
    NỮ: [
      "QUẦN ÁO",
      "PHỤ KIỆN",
      "ĐỒ BƠI & ĐỒ ĐI BIỂN",
      "GIÀY",
      "SPORT",
      "GIẢM GIÁ",
    ],
    NAM: ["QUẦN ÁO", "GIÀY", "PHỤ KIỆN", "SPORT", "GIẢM GIÁ"],
    "TRẺ EM": ["QUẦN ÁO", "PHỤ KIỆN", "GIÀY", "GIẢM GIÁ"],
  };

  // const sampleImages = [
  //   { src: "https://example.com/image1.jpg", title: "COOLMAX®" },
  //   { src: "https://example.com/image2.jpg", title: "COMFORT FIT" },
  // ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md flex justify-between items-center p-5">
      <div className="flex items-center space-x-2">
        {/* Logo */}
        <div className="text-2xl font-bold">ClothingStore</div>
        {/* Menu Icon gần Logo */}
        <button
          className="p-2 text-black"
          onClick={() => setIsOpen(true)}
          aria-label="Open Menu"
        >
          <MenuIcon className="h-6 w-6" />
        </button>

      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Left 1/2 screen menu */}
          <div className="w-1/2 bg-white p-6 overflow-y-auto shadow-xl">
            {/* Header */}
            <div className="flex justify-between mb-4">
              <div className="space-x-4 font-bold">
                {["NỮ", "NAM", "TRẺ EM"].map((tab) => (
                  <button
                    key={tab}
                    className={tab === activeTab ? "underline" : ""}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <button onClick={() => setIsOpen(false)}>✕</button>
            </div>

            {/* Content inside left */}
            <div className="flex flex-col gap-6">
              <div>
                <h2 className="font-bold text-lg mb-2">SẢN PHẨM MỚI</h2>
                <ul className="space-y-1 font-medium">
                  {categories[activeTab].map((item, index) => (
                    <li
                      key={index}
                      className={item === "GIẢM GIÁ" ? "text-red-600" : ""}
                    >
                      <a href="#">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* <div className="space-y-4">
                {sampleImages.map((img, i) => (
                  <div key={i} className="text-center">
                    <img
                      src={img.src}
                      alt={img.title}
                      className="w-full max-w-xs mx-auto"
                    />
                    <p className="mt-2 font-semibold text-sm">{img.title}</p>
                  </div>
                ))}
              </div> */}

              <div className="mt-4 text-sm space-y-2 text-gray-700">
                <p>THỜI TRANG BỀN VỮNG</p>
                <p>DỊCH VỤ KHÁCH HÀNG</p>
                <p>BẢN TIN</p>
                <p>TÌM CỬA HÀNG</p>
                <p>TẢI VỀ CHO ANDROID</p>
                <p>TẢI VỀ CHO IOS</p>
              </div>
            </div>
          </div>

          {/* Right 1/2 overlay with blur or semi-transparent */}
          <div
            className="w-1/2 bg-black bg-opacity-50"
            onClick={() => setIsOpen(false)}
          ></div>
        </div>
      )}

      <div className="space-x-6">
        <a href="#" className="hover:text-gray-700 text-gray-500 font-bold">
          HOME
        </a>
        <a href="#" className="hover:text-gray-700 text-gray-500 font-bold">
          SẢN PHẨM
        </a>
        <a href="#" className="hover:text-gray-700 text-gray-500 font-bold">
          LIÊN HỆ
        </a>
        <a href="#" className="hover:text-gray-700 text-gray-500 font-bold">
          VỀ CHÚNG TÔI
        </a>
        
      </div>
      <div className="flex items-center space-x-4">
        {/* Tìm kiếm */}
        <div className="relative">
          <form class="flex bg-white border border-zinc-700 text-zinc-800 rounded-md shadow text-sm">
            <div aria-disabled="true" class="w-10 grid place-content-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
            </div>
            <input
              type="text"
              spellcheck="false"
              name="text"
              class="bg-transparent py-1.5 outline-none placeholder:text-zinc-400 w-20 focus:w-48 transition-all"
              placeholder="Search..."
            />
            <button
              class="w-10 grid place-content-center"
              aria-label="Clear input button"
              type="reset"
            >
              <svg
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                height="16"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button>
          </form>
          {/* <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" /> */}
        </div>

        {/* Tài khoản */}
        <a
          href="#"
          className="flex items-center space-x-1 hover:text-gray-700 font-bold"
        >
          <UserIcon className="w-6 h-6" />
          {/* <span>Account</span> */}
        </a>

        {/* Giỏ hàng */}
        <a
          href="#"
          className="flex items-center space-x-1 hover:text-gray-700 font-bold"
        >
          <ShoppingCartIcon className="w-6 h-6" />
          {/* <span>Cart</span> */}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
