import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const eployersSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items.push(action.payload);
    },
    setDelete: (state, action) => {
      // state.items.map((val)=>{
      //   if(val.id!== action.payload){
      //     return val
      //   }
      // })
      state.items = state.items.filter((val) => val.id !== action.payload);
    },
  },
});

export const { setItems, setDelete } = eployersSlice.actions;
export default eployersSlice.reducer;
