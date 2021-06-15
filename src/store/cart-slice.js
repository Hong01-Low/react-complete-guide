import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    changed: false,
  },
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
      console.log('7');
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.changed = true;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        if (existingItem.quantity >= 10) {
        existingItem.totalPrice = (newItem.price*existingItem.quantity)*0.90;  
        } else {
        existingItem.totalPrice = newItem.price*existingItem.quantity;
        }
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.changed = true;
      if (existingItem.quantity === 1) {
        console.log('debug1',state.items);
        state.items = state.items.filter((item) => item.id !== id);
        console.log('debug2',state.items);
      } else {
        existingItem.quantity--;
        if (existingItem.quantity >=10) {
          existingItem.totalPrice = (existingItem.price*existingItem.quantity)*0.90;
        } else {
          existingItem.totalPrice = existingItem.price*existingItem.quantity;
        }
      }
    }
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;