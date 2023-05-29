import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../../features/user/userSlide';

export const store = configureStore({
  reducer: {
    auth: authReducer
  }
})