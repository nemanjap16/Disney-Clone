import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userName: "",
    userEmail: "",
    userPhoto: "",
  },
  reducers: {
    setUserLoginDetails: (state, action) => {
      state.userName = action.payload.userName;
      state.userEmail = action.payload.userEmail;
      state.userPhoto = action.payload.userPhoto;
    },
    setSignOutState: (state) => {
      state.userName = null;
      state.userEmail = null;
      state.userPhoto = null;
    },
  },
});

export const selectUserName = (state) => state.user.userName;
export const selectUserEmail = (state) => state.user.userEmail;
export const selectUserPhoto = (state) => state.user.userPhoto;

export const { setUserLoginDetails, setSignOutState } = userSlice.actions;

export default userSlice.reducer;
