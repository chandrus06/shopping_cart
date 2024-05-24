import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "../customSlices/authslice";
import totalItemSliceReducer from "../customSlices/totalItemSlice";
import cartReducer from "../customSlices/cartSlice";

export const store = configureStore({
    reducer: {
        authReducer: authSliceReducer,
        countReducer: totalItemSliceReducer, 
        cartReducer: cartReducer
    }
});