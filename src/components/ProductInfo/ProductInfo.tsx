import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import './ProductInfo.css';

const ProductInfo = () => {
  const product = useSelector((state: RootState) => state.info);

  return (
    <div className="product">
      <div className="product-image">
        <img src={product.image} alt="product-image" width={150} height={150} />
      </div>
      <div className="product-title">{product.title}</div>
      <div className="product-subtitle">{product.subtitle}</div>
      <div className="product-tags">
        {product.tags.map((product) => (
          <div className="product-tag" key={product}>
            {product}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductInfo;
