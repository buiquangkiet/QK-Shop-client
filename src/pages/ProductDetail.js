import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { productData } from '../Test/TestProductData';

const ProductDetail = () => {
  const { id } = useParams();
  const product = productData.find((p) => p.id === id);

  const [selectedColor, setSelectedColor] = useState(product?.colors[0]);
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);

  if (!product) return <div className="text-center text-xl mt-10">❌ Không tìm thấy sản phẩm.</div>;

  const handleAddToCart = () => {
  const item = {
    ...product,
    selectedColor,
    selectedSize,
    quantity,
  };

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existing = cart.find(
    (p) =>
      p.id === product.id &&
      p.selectedColor === selectedColor &&
      p.selectedSize === selectedSize
  );

  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push(item);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("🛒 Đã thêm vào giỏ hàng!");
};


  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Hình ảnh */}
      <div>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[500px] object-cover rounded-xl shadow-md"
        />
      </div>

      {/* Thông tin */}
      <div className="flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

          {/* Giá */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-red-600 font-bold text-2xl">
              {product.discountPrice.toLocaleString()}₫
            </span>
            <span className="text-gray-500 line-through text-lg">
              {product.originalPrice.toLocaleString()}₫
            </span>
          </div>

          {/* Màu sắc */}
          <div className="mb-4">
            <h2 className="font-semibold mb-2">Chọn màu:</h2>
            <div className="flex gap-3">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-7 h-7 rounded-full border-2 ${
                    selectedColor === color ? 'border-blue-600' : 'border-gray-300'
                  }`}
                  style={{ backgroundColor: color }}
                  title={color}
                />
              ))}
            </div>
          </div>

          {/* Size */}
          <div className="mb-4">
            <h2 className="font-semibold mb-2">Chọn size:</h2>
            <div className="flex gap-2">
              {['S', 'M', 'L', 'XL'].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-1 border rounded-md ${
                    selectedSize === size ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'
                  } hover:border-blue-500 transition`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Số lượng */}
          <div className="mb-6">
            <h2 className="font-semibold mb-2">Số lượng:</h2>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                className="w-8 h-8 rounded-md bg-gray-200 hover:bg-gray-300 text-xl"
              >
                -
              </button>
              <span className="text-lg">{quantity}</span>
              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                className="w-8 h-8 rounded-md bg-gray-200 hover:bg-gray-300 text-xl"
              >
                +
              </button>
            </div>
          </div>

          {/* Mô tả */}
          <p className="text-gray-600 mb-6">
            Đây là sản phẩm chất lượng cao, thiết kế thời trang, phù hợp cho mọi hoạt động thể thao hoặc sử dụng hằng ngày.
          </p>
        </div>

        {/* Nút thêm vào giỏ */}
        <button
          onClick={handleAddToCart}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold transition"
        >
          🛒 Thêm vào giỏ hàng
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
