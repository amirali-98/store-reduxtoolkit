import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import api from "../configs/api";

const fetchProducts = createAsyncThunk("products/fetchProducts", () => {
  return api
    .get("/products")
    .then(res => res)
    .catch(err => err);
});

const initialState = {
  loading: false,
  products: [],
  error: "",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchProducts.pending, state => {
      state.loading = true;
      state.products = [];
      state.error = "";
    });

    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.error = "";
    });

    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.products = [];
      state.error = action.error;
    });
  },
});

export default productsSlice.reducer;
export { fetchProducts };
