import { createSlice } from "@reduxjs/toolkit";

const cartReducer = createSlice({
  name: "cartSlice",
  initialState: {
    totalCart: [],
    totalAmount: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      // Check if the item already exists in the cart based on some unique identifier
      const existingItem = state.totalCart.find(
        (item) => item.id === action.payload.id
      );

      // If the item doesn't exist, push it to the cart
      if (!existingItem) {
        state.totalCart.push(action.payload);
      } else {
        const index = state.totalCart.findIndex((pro)=> pro.id == action.payload.id);
        state.totalCart[index].quantity+=1;
        state.totalCart[index].total =state.totalCart[index].quantity * action.payload.price;
      }

     state.totalAmount = state.totalCart.reduce((acc,cum) => acc + cum.total , 0 );

    },

    incrementProduct: (state, action) => {
       const existingItem = state.totalCart.find(
        (item) => item.id === action.payload.id
      );

      // If the item doesn't exist, push it to the cart
      if (existingItem) {
        const index = state.totalCart.findIndex((pro)=> pro.id == action.payload.id);
        state.totalCart[index].quantity+=1;
        state.totalCart[index].total =state.totalCart[index].quantity * action.payload.price;
      }

      state.totalAmount = state.totalCart.reduce((acc,cum) => acc + cum.total , 0 );


    },
    decrementProduct: (state, action) => {
      const existingItem = state.totalCart.find(
       (item) => item.id === action.payload.id
     );

     // If the item doesn't exist, push it to the cart
     if (existingItem) {
       const index = state.totalCart.findIndex((pro)=> pro.id == action.payload.id);
       state.totalCart[index].quantity-=1;
       state.totalCart[index].total =state.totalCart[index].quantity * action.payload.price;
     }

     state.totalAmount = state.totalCart.reduce((acc,cum) => acc + cum.total , 0 );

   },
  },
  //  }
});

export default cartReducer.reducer;

export const { addToCart, incrementProduct, decrementProduct } = cartReducer.actions;
