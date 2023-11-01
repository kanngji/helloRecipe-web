import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    user_id: null,
    user_password: null,
    token: null,
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.user_id = action.payload.user_id;
      state.user_password = action.payload.user_password;
      state.user_token = action.payload.user_token;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user_id = null;
      state.user_password = null;
      state.user_token = null;
    },
  },
});
// login,logout
export const authActions = authSlice.actions;
export default authSlice;
