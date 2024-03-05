import { createSlice } from '@reduxjs/toolkit';

export const firstSlice = createSlice({
    name: 'input',
    initialState: {
        value:'',
    },
    reducers: {
        setInput: (state, action) => {
            state.value = action.payload;
  
            console.log(action);
        },
    }
});

export const { setInput } = firstSlice.actions;

export default firstSlice.reducer;