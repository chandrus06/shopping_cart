import { createSlice } from '@reduxjs/toolkit';

const totalCount = createSlice({
 name: 'CountSlice',
 initialState: {
    totalItems: 0,
 }
});

export default totalCount.reducer;