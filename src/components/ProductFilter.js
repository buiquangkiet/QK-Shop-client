import React, { useState } from "react";
import { DTOColor } from "../dto/DTOColor";

const ProductFilter = ({ onFilterChange }) => {
  const categories = ["Tất cả", "Áo", "Quần", "Áo khoác", "Giày", "Phụ kiện"];
  const status = ["Còn hàng", "Hết hàng", "Đang nhập"];
  const sizes = ["S", "M", "L", "XL", "XXL", "3Xl"];
  const colors = [
    new DTOColor ( 'Tất cả',''),
    new DTOColor ( 'Đỏ','red'),
    new DTOColor ( 'Xanh','green'),
    new DTOColor ( 'Trắng','#F8F8F8'),
    new DTOColor ( 'Vàng','yellow'),
    new DTOColor ( 'Hồng','#FF69B4'),
    new DTOColor ( 'Tím','#C71585'),
    new DTOColor ( 'Đen','#181818'),
  ];


  const priceRanges = [
    { label: "Tất cả", value: "" },
    { label: "Dưới 500K", value: "0-500000" },
    { label: "500K - 1 triệu", value: "500000-1000000" },
    { label: "Trên 1 triệu", value: "1000000-9999999" },
  ];
  const ratings = [5, 4, 3, 2, 1];
  const sortOptions = [
    { label: "Mới nhất", value: "newest" },
    { label: "Giá tăng dần", value: "price-asc" },
    { label: "Giá giảm dần", value: "price-desc" },
  ];
  const [filters, setFilters] = useState({
    category: "",
    price: "",
    rating: "",
    sort: "newest",
    status: "",
    sizes: "",
    color: "",
  });

  const handleChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="w-full md:w-64 bg-white p-4 rounded-2xl shadow-md space-y-6">
      <div>
        <h2 className="font-semibold mb-2">Lọc theo</h2>
        <select
          className="w-full border rounded p-2"
          value={filters.category}
          onChange={(e) => handleChange("category", e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat === "Tất cả" ? "" : cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div>
        <h2 className="font-semibold mb-2">Khoảng giá</h2>
        <select
          className="w-full border rounded p-2"
          value={filters.price}
          onChange={(e) => handleChange("price", e.target.value)}
        >
          {priceRanges.map((pr) => (
            <option key={pr.label} value={pr.value}>
              {pr.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <h2 className="font-semibold mb-2">Trạng thái</h2>
        <select
          className="w-full border rounded p-2"
          value={filters.status}
          onChange={(e) => handleChange("status", e.target.value)}
        >
          <option value="">Tất cả</option>
          {status.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <h2 className="font-semibold mb-2">Kích thước</h2>
        <select
          className="w-full border rounded p-2"
          value={filters.sizes}
          onChange={(e) => handleChange("sizes", e.target.value)}
        >
          <option value="">Tất cả</option>
          {sizes.map((si) => (
            <option key={si} value={si}>
              {si}
            </option>
          ))}
        </select>
      </div>

      <div>
  <h2 className="font-semibold mb-2">Màu sắc</h2>
  <div className="flex flex-wrap gap-2">
    {colors.map((color) => (
      <button
        key={color.name}
        onClick={() => handleChange("color", color.name === "Tất cả" ? "" : color.name)}
        className={`w-10 h-10 rounded-full border-2 ${
          filters.color === color.name || (filters.color === "" && color.name === "Tất cả")
            ? "border-black"
            : "border-transparent"
        }`}
        style={{
          backgroundColor: color.id || "#f0f0f0", // fallback màu xám nhẹ nếu không có mã màu
          color: color.id ? "white" : "black", // để chữ dễ nhìn nếu cần
        }}
        title={color.name} // tooltip hiển thị tên màu
      >
        {color.name === "Tất cả" ? "X" : ""}
      </button>
    ))}
  </div>
</div>


      <div>
        <h2 className="font-semibold mb-2">Đánh giá</h2>
        <div className="flex flex-col gap-1">
          {ratings.map((r) => (
            <label key={r} className="flex items-center gap-2">
              <input
                type="radio"
                name="rating"
                value={r}
                checked={filters.rating === r.toString()}
                onChange={() => handleChange("rating", r.toString())}
              />
              <span>{"★".repeat(r)} trở lên</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h2 className="font-semibold mb-2">Sắp xếp</h2>
        <select
          className="w-full border rounded p-2"
          value={filters.sort}
          onChange={(e) => handleChange("sort", e.target.value)}
        >
          {sortOptions.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ProductFilter;
