import { createSlice } from '@reduxjs/toolkit';

const initialState = []

export const nominatesSlice = createSlice({
  name: 'nominates',
  initialState,

  reducers: {
    add: (state, action) => {
      if (state.length < 5) {
        state.push(action.payload)
      }
    },
    remove: (state, action) => {
      const idx = state.findIndex(movie => movie.imdbID === action.payload.imdbID)
      if (idx >= 0) {
        state.splice(idx, 1)
      }
    }
  },
  
});

export const { add, remove } = nominatesSlice.actions;


export const selectNominates = (state) => state.nominates;

export default nominatesSlice.reducer;