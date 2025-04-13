import { createSlice } from "@reduxjs/toolkit";
import { calculateTotalCost, calculateTotalItems } from "../utils/helpers";

const initialState = {
  items: [],
  totalItems: 0,
  totalCost: 0,
  isPending: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      if (!state.items.find(i => +i.id === +action.payload.id)) {
        state.items.push({ ...action.payload, quantity: 1 });
      } else {
        state.items.find(i => i.id === action.payload.id).quantity++;
      }
      state.totalItems = calculateTotalItems(state.items);
      state.isPending = true;
      state.totalCost = calculateTotalCost(state.items);
    },
    remove: (state, action) => {
      if (state.items.find(i => +i.id === +action.payload.id).quantity > 1) {
        state.items.find(i => i.id === action.payload.id).quantity--;
      } else {
        state.items = state.items.filter(i => +i.id !== +action.payload.id);
      }
      state.totalItems = calculateTotalItems(state.items);
      state.isPending = true;
      state.totalCost = calculateTotalCost(state.items);
    },
  },
});

export default cartSlice.reducer;
export const { add, remove } = cartSlice.actions;
