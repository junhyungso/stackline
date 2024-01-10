import CurrencyFormat from 'react-currency-format';
import { useDispatch, useSelector } from 'react-redux';
import { sortSales } from '../../state/stackline-data/stackline-data';
import { RootState } from '../../state/store';
import './ProductSales.css';

const ProductSales = () => {
  const product = useSelector((state: RootState) => state.info);
  const dispatch = useDispatch();

  return (
    <div className="sales">
      <div className="sales-title">
        <div className="sales-title-container">
          WEEK ENDING
          <button
            className="sort-button"
            onClick={() => dispatch(sortSales('weekEnding'))}
          >
            v
          </button>
        </div>
        <div className="sales-title-container">
          RETAIL SALES
          <button
            className="sort-button"
            onClick={() => dispatch(sortSales('retailSales'))}
          >
            v
          </button>
        </div>
        <div className="sales-title-container">
          WHOLESALE SALES
          <button
            className="sort-button"
            onClick={() => dispatch(sortSales('wholesaleSales'))}
          >
            v
          </button>
        </div>
        <div className="sales-title-container">
          UNITS SOLD
          <button
            className="sort-button"
            onClick={() => dispatch(sortSales('unitsSold'))}
          >
            v
          </button>
        </div>
        <div className="sales-title-container">
          RETAILER MARGIN
          <button
            className="sort-button"
            onClick={() => dispatch(sortSales('retailerMargin'))}
          >
            v
          </button>
        </div>
      </div>
      {product.sales.map((sale, i) => {
        return (
          <div className="sales-data-container" key={i * Math.random()}>
            <div className="sales-data">{sale.weekEnding}</div>
            <div className="sales-data">
              <CurrencyFormat
                value={sale.retailSales}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
              />
            </div>
            <div className="sales-data">
              <CurrencyFormat
                value={sale.wholesaleSales}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
              />
            </div>
            <div className="sales-data">{sale.unitsSold}</div>
            <div className="sales-data">
              <CurrencyFormat
                value={sale.retailerMargin}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductSales;
