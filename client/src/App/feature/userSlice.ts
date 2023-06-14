import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

const initialvalue = {
  userId: "",
  name: "",
  email: "",
  profileImage: "",
};

const userSlicer = createSlice({
  name: "user",
  initialState: initialvalue,
  reducers: {
    setUser: (state, actions) => {
      state.userId = actions.payload.user._id;
      state.name = actions.payload.user.username;
      state.email = actions.payload.user.email;
      state.profileImage = actions.payload.user.profilePic;
      console.log("hi", actions.payload.user);
    },
    removeUser: (state) => {
      state.name = "";
      state.userId = "";
      state.email = "";
      state.profileImage = "";
    },
  },
});

export const getUserInfo = (state: RootState) => state.user;

export const { setUser, removeUser } = userSlicer.actions;

export default userSlicer.reducer;
