import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

const initialvalue = {
  search: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState: initialvalue,
  reducers: {
    setSearch: (state, actions) => {
      state.search = actions.payload;
    },
    resetSearch: (state) => {
      state.search = "";
    },
  },
});

export const getSearchText = (state: RootState) => state.search;

export const { setSearch, resetSearch } = searchSlice.actions;

export default searchSlice.reducer;
