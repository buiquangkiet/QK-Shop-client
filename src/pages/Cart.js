import React, { useEffect, useState } from "react";
import { Trash2, Heart } from "lucide-react"; // icon hiện đại

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);
  }, []);

  const handleRemoveItem = (index) => {
    const newCart = [...cartItems];
    newCart.splice(index, 1);
    setCartItems(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.discountPrice * item.quantity,
    0
  );

  return (
    <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Giỏ hàng bên trái */}
      <div className="md:col-span-2 space-y-6">
        <h2 className="text-2xl font-bold border-b pb-2">🛒 GIỎ HÀNG</h2>

        {cartItems.length === 0 ? (
          <p className="text-center text-lg">Giỏ hàng trống</p>
        ) : (
          cartItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center border-b pb-4 gap-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-32 h-32 object-cover rounded"
              />

              <div className="flex-1">
                <h3 className="font-semibold text-lg leading-snug">
                  {item.name}
                </h3>
                <p className="text-gray-500 text-sm">
                  Giá: {item.discountPrice.toLocaleString()} VND
                </p>
                <div className="flex gap-4 mt-2 text-sm">
                  <div>
                    <label>Size</label>
                    <select
                      className="border rounded px-2 py-1 ml-2"
                      defaultValue={item.selectedSize}
                      disabled
                    >
                      <option>{item.selectedSize}</option>
                    </select>
                  </div>
                  <div>
                    <label>Số lượng</label>
                    <select
                      className="border rounded px-2 py-1 ml-2"
                      defaultValue={item.quantity}
                      disabled
                    >
                      {[1, 2, 3, 4, 5].map((q) => (
                        <option key={q}>{q}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center gap-2">
                <p className="text-orange-600 font-bold text-lg">
                  {(item.discountPrice * item.quantity).toLocaleString()} VND
                </p>
                <div className="flex gap-2">
                  <button className="p-2 border rounded hover:bg-gray-100">
                    <Heart className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleRemoveItem(index)}
                    className="p-2 bg-black text-white rounded hover:bg-red-600"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Đơn hàng bên phải */}
      <div className="bg-gray-50 p-6 rounded-xl shadow-sm h-fit">
        <h3 className="font-bold text-lg border-b pb-2 mb-4">ĐƠN HÀNG</h3>
        <div className="space-y-4 text-sm">
          <div>
            <label className="block mb-1 font-medium">Nhập mã khuyến mãi</label>
            <div className="flex gap-2">
              <input
                type="text"
                className="flex-1 border px-3 py-2 rounded"
                placeholder="Nhập mã..."
              />
              <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                Áp dụng
              </button>
            </div>
          </div>
          <div className="flex justify-between border-t pt-4">
            <span>Đơn hàng</span>
            <span>{totalPrice.toLocaleString()} VND</span>
          </div>
          <div className="flex justify-between">
            <span>Giảm</span>
            <span>0 VND</span>
          </div>
          <div className="flex justify-between font-bold text-lg border-t pt-4">
            <span>Tạm tính</span>
            <span>{totalPrice.toLocaleString()} VND</span>
          </div>
        </div>
        <button className="w-full mt-6 bg-orange-500 text-white py-3 rounded text-center font-semibold hover:bg-orange-600">
          TIẾP TỤC THANH TOÁN
        </button>
      </div>
    </div>
  );
};

export default Cart;
