import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice"; 
import cartReducer from '../slices/cartSlice';
import quoteReducer from '../slices/quoteSlice'; // 1. Import the new reducer

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    quote: quoteReducer, 
  },
});

