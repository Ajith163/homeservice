import { configureStore } from '@reduxjs/toolkit';
import servicesReducer from './slices/servicesSlice';

// Main Redux store configuration
export const store = configureStore({
  reducer: {
    services: servicesReducer, // Manages service/product data
  },
});
