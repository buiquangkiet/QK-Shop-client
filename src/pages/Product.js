import ProductFilter from '../components/ProductFilter';
import ProductItem from '../components/ProductItem';
import { productData } from '../Test/TestProductData';

const Product = () => {
  const handleFilterChange = (filters) => {
    console.log('Lọc theo:', filters);
  };

  return (
    <div className="flex gap-6">
      <ProductFilter onFilterChange={handleFilterChange} />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-5">
        {productData.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Product;
