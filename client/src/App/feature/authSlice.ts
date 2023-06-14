import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

const initialvalue = {
  authStatus: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialvalue,
  reducers: {
    setSignInUser: (state) => {
      state.authStatus = true;
    },
    setSignOutUser: (state) => {
      state.authStatus = false;
    },
  },
});

export const getAuthStatus = (state: RootState) => state.auth;

export const { setSignInUser, setSignOutUser } = authSlice.actions;

export default authSlice.reducer;
