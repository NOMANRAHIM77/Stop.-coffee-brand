import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice"; // 
import cartReducer from '../slices/cartSlice';

export const store = configureStore({
  reducer: {
    // This 'auth' key is what you'll use in useSelector(state => state.auth)
    auth: authReducer,
    cart: cartReducer,
  },
});