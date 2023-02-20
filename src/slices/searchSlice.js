import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const searchSlice = createSlice({
  name: "items",
  initialState,
  reducers: {},
});

export const { setSearch } = searchSlice.actions;
export default searchSlice.reducer;
