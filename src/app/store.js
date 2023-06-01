import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/user/userSlide';
import productReucer from '../features/Product/ProductSlice'
export const store = configureStore({
  reducer: {
    auth: authReducer,
    product : productReucer,
  }
});
