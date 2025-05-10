import ProductFilter from '../components/ProductFilter';
import ProductItem from '../components/ProductItem';
import { productData } from '../Test/TestProductData';

const Product = () => {
  const handleFilterChange = (filters) => {
    console.log('Lọc theo:', filters);
  };

  const handleAddToCart = (product) => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existing = cart.find((item) => item.id === product.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Đã thêm vào giỏ hàng!");
};


  return (
    <div className="flex gap-6">
      <ProductFilter onFilterChange={handleFilterChange} />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-5">
        {productData.map((product) => (
          <ProductItem key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default Product;
