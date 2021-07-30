import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  context: 'Powerpuff Girls',
};


export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setContext: (state, action) => {
      state.context = action.payload;
    }
  },
});

export const { setContext } = searchSlice.actions;


export default searchSlice.reducer;