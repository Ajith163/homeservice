import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import getProducts from '../../api/productService';


export const fetchServices = createAsyncThunk(
  'services/fetchServices',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getProducts();
      if (!Array.isArray(data)) {
        console.error("❌ API returned non-array data:", data);
        return rejectWithValue("Invalid data format received");
      }
      return data;
    } catch (error) {
      console.error("❌ Error fetching services:", error);
      return rejectWithValue(error.message || "Failed to fetch services");
    }
  }
);

const initialState = {
  items: [],
  loading: false, 
  error: null, 
  lastFetched: null, 
};

const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    resetServices: () => initialState,
    addService: (state, action) => {
      state.items.push(action.payload);
    },
    updateService: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    removeService: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchServices.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchServices.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        state.error = null;
        state.lastFetched = new Date().toISOString();
      })
      .addCase(fetchServices.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearError, resetServices, addService, updateService, removeService } = servicesSlice.actions;

export const selectServices = (state) => state.services.items;
export const selectServicesLoading = (state) => state.services.loading;
export const selectServicesError = (state) => state.services.error;
export const selectServiceById = (state, id) => state.services.items.find(item => item.id === parseInt(id));

export default servicesSlice.reducer;

