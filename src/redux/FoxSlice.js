//Fox reducer
//TODO call API addToCart/resetCart
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  userInfo: [],
  products: [],
  checkedBrands: [],
  checkedCategorys: [],
  En: true,
};

export const FoxSlice = createSlice({
  name: "FoxCommerce",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find(
        (item) => item.product_code === action.payload.product_code
      );
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
      // Dispatch a success toast
      toast.success("Product added to cart");
    },
    increaseQuantity: (state, action) => {
      const item = state.products.find(
        (item) => item.product_code === action.payload.product_code
      );
      if (item) {
        item.quantity++;
        // Dispatch a success toast
      }
    },
    drecreaseQuantity: (state, action) => {
      const item = state.products.find(
        (item) => item.product_code === action.payload.product_code
      );
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
        // Dispatch a success toast
      }
    },
    deleteItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item.product_code !== action.payload
      );
      // Dispatch a success toast
      toast.error("Product removed from cart");
    },
    resetCart: (state) => {
      state.products = [];
      // Dispatch a success toast
    },

    toggleBrand: (state, action) => {
      const brand = action.payload;
      const isBrandChecked = state.checkedBrands.some(
        (b) => b.id === brand.id
      );

      if (isBrandChecked) {
        state.checkedBrands = state.checkedBrands.filter(
          (b) => b.id !== brand.id
        );
      } else {
        state.checkedBrands.push(brand);
      }
    },

    toggleCategory: (state, action) => {
      const cat = action.payload;
      const isCategoryChecked = state.checkedCategorys.some(
        (b) => b.category_code === cat.category_code
      );

      if (isCategoryChecked) {
        state.checkedCategorys = state.checkedCategorys.filter(
          (b) => b.category_code !== cat.category_code
        );
      } else {
        state.checkedCategorys.push(cat);
      }
    },

    resetCategory: (state) => {
      state.checkedCategorys = [];
    },

    toggleLanguage: (state, action) => {
      const language = action.payload;
      if (language && language.toLowerCase() === 'en') {
        state.En = true;
      } else {
        state.En = false;
      }
      state.userLanguage = language;
    },
    
  },
});

export const {
  addToCart,
  increaseQuantity,
  drecreaseQuantity,
  deleteItem,
  resetCart,
  toggleBrand,
  toggleCategory,
  toggleLanguage,
  resetCategory
} = FoxSlice.actions;
export default FoxSlice.reducer;
