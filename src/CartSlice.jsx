import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const { payload: item } = action;
      const elementExists = state.items.find(i => i.name === item.name);

      if (elementExists) {
        elementExists.quantity++;
      } else {
        state.items.push({
          name: item.name, 
          image: item.image,
          cost: item.cost, 
          quantity: 1 
        });
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload.name);
    },
    updateQuantity: (state, action) => {
      const { payload: item } = action;
      const element = state.items.find(i => i.name === item.name);
      if (element) {
        element.quantity = item.quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
