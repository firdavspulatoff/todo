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
      console.log(state.searchs);
      state.searchs = [];
      state.searchs.push(state.items[number]);
    },
    setUpdateItems: (state, action) => {
      const number = state.items.findIndex(
        (val) => val.id === action.payload.id
      );

      const item = {
        id: action.payload.id,
        name: action.payload.name || state.items[number].name,
        surename: action.payload.surename || state.items[number].surename,
        status: action.payload.status || state.items[number].status,
        contact: action.payload.contact || state.items[number].contact,
      };
      delete state.items[number];
      if (number !== -1) state.items.push(item);
    },
  },
});

export const { setItems, setDelete, setSearch, setUpdateItems } =
  eployersSlice.actions;
export default eployersSlice.reducer;
