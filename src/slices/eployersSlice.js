import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  searchs: [],
};

const eployersSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items.push(action.payload);
    },
    setDelete: (state, action) => {
      
      state.items = state.items.filter((val) => val.id !== action.payload);
    },
    setSearch: (state, action) => {
      const number = state.items.findIndex(
        (val) => val.name === action.payload.name
      );
      state.searchs=[]
      state.searchs.push(state.items[number]);
    },
  },
});

export const { setItems, setDelete, setSearch } = eployersSlice.actions;
export default eployersSlice.reducer;
