import { createSlice } from '@reduxjs/toolkit';
import stacklineData from '../../../stackline-data.json';

enum SalesTypes {
  weekEnding = 'weekEnding',
  retailSales = 'retailSales',
  wholesaleSales = 'wholesaleSales',
  unitsSold = 'unitsSold',
  retailerMargin = 'retailerMargin',
}

type Sales = {
  weekEnding: string;
  retailSales: number;
  wholesaleSales: number;
  unitsSold: number;
  retailerMargin: number;
};

type ProductState = {
  id: string;
  title: string;
  image: string;
  subtitle: string;
  brand: string;
  reviews: object[];
  retailer: string;
  details: string[];
  tags: string[];
  sales: Sales[];
  isIncrement: boolean;
};

const data = stacklineData[0];

const initialState: ProductState = {
  id: data.id,
  title: data.title,
  image: data.image,
  subtitle: data.subtitle,
  brand: data.brand,
  reviews: data.reviews,
  retailer: data.retailer,
  details: data.details,
  tags: data.tags,
  sales: data.sales,
  isIncrement: false,
};

const infoSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    sortSales: (state, action) => {
      console.log(state.isIncrement, action.payload);
      if (state.isIncrement) {
        state.sales.sort((a, b) => {
          if (action.payload === SalesTypes.weekEnding) {
            return a.weekEnding > b.weekEnding
              ? 1
              : b.weekEnding > a.weekEnding
              ? -1
              : 0;
          } else if (action.payload === SalesTypes.retailSales) {
            return a.retailSales > b.retailSales
              ? 1
              : b.retailSales > a.retailSales
              ? -1
              : 0;
          } else if (action.payload === SalesTypes.wholesaleSales) {
            return a.wholesaleSales > b.wholesaleSales
              ? 1
              : b.wholesaleSales > a.wholesaleSales
              ? -1
              : 0;
          } else if (action.payload === SalesTypes.unitsSold) {
            return a.unitsSold > b.unitsSold
              ? 1
              : b.unitsSold > a.unitsSold
              ? -1
              : 0;
          } else {
            return a.retailerMargin > b.retailerMargin
              ? 1
              : b.retailerMargin > a.retailerMargin
              ? -1
              : 0;
          }
        });
        state.isIncrement = false;
      } else {
        state.sales.sort((a, b) => {
          if (action.payload === SalesTypes.weekEnding) {
            return a.weekEnding < b.weekEnding
              ? 1
              : b.weekEnding < a.weekEnding
              ? -1
              : 0;
          } else if (action.payload === SalesTypes.retailSales) {
            return a.retailSales < b.retailSales
              ? 1
              : b.retailSales < a.retailSales
              ? -1
              : 0;
          } else if (action.payload === SalesTypes.wholesaleSales) {
            return a.wholesaleSales < b.wholesaleSales
              ? 1
              : b.wholesaleSales < a.wholesaleSales
              ? -1
              : 0;
          } else if (action.payload === SalesTypes.unitsSold) {
            return a.unitsSold < b.unitsSold
              ? 1
              : b.unitsSold < a.unitsSold
              ? -1
              : 0;
          } else {
            return a.retailerMargin < b.retailerMargin
              ? 1
              : b.retailerMargin < a.retailerMargin
              ? -1
              : 0;
          }
        });
        state.isIncrement = true;
      }
    },
  },
});

export const { sortSales } = infoSlice.actions;
export default infoSlice.reducer;
