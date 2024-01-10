import ProductInfo from '../ProductInfo/ProductInfo';
import ProductSales from '../ProductSales/ProductSales';
import './ProductPage.css';

const ProductPage = () => {
  return (
    <div className="product-page">
      <ProductInfo />
      <ProductSales />
    </div>
  );
};

export default ProductPage;
