import React from "react";
import { useNavigate } from "react-router-dom";

const ProductItem = ({ product, onAddToCart }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Chuyển hướng đến trang chi tiết sản phẩm
    navigate(`/product/${product.id}`);
  };

  // const handleAddToCart = (e) => {
  //   e.stopPropagation(); // Ngừng sự kiện lan lên container
  //   if (onAddToCart) {
  //     onAddToCart(product); // Thêm sản phẩm vào giỏ hàng
  //   }
  // };

  return (
    <div
      className="flex flex-col border rounded-xl overflow-hidden shadow-md bg-white hover:shadow-lg transition duration-300 h-[500px] cursor-pointer"
      onClick={handleClick} // Điều hướng tới trang chi tiết sản phẩm khi click vào sản phẩm
    >
      <div className="w-full h-80">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-base md:text-lg font-semibold mb-2 line-clamp-2">
          {product.name}
        </h3>

        <div className="mb-3">
          {product.discountPrice ? (
            <div className="flex items-center gap-2">
              <span className="text-red-500 font-bold text-base">
                {product.discountPrice.toLocaleString()}₫
              </span>
              <span className="text-gray-400 line-through text-sm">
                {product.originalPrice.toLocaleString()}₫
              </span>
            </div>
          ) : (
            <span className="text-black font-bold text-base">
              {product.originalPrice.toLocaleString()}₫
            </span>
          )}
        </div>

        <div className="flex gap-2 mb-4">
          {product.colors.map((color, index) => (
            <span
              key={index}
              className="w-5 h-5 rounded-full border border-gray-300"
              style={{ backgroundColor: color }}
              title={color}
            ></span>
          ))}
        </div>

        <button
          onClick={handleClick} // Thêm vào giỏ hàng khi click vào nút
          className="mt-auto w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md text-sm font-medium transition"
        >
          Thêm vào giỏ
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
