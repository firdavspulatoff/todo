import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const searchSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.items=state.items.findIndex(val => val.name === action.payload.name);
      // state.items = state.items.filter((val) => val.id !== action.payload);

    },
    
  },
});

export const { setSearch } = searchSlice.actions;
export default searchSlice.reducer;