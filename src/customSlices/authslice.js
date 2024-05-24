import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
 name:"auth",
 initialState: {
    authentication: false,
 },
 reducers: {
        authenticationAction: (state,action)=> {
            state.authentication = !state.authentication;
        }
 }
});

export default authSlice.reducer;

export const { authenticationAction } = authSlice.actions;
