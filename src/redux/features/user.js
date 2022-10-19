import { createSlice } from "@reduxjs/toolkit";
import { userLogin, getUserDetails, modifiedProfile } from "../userAction";

// initialize userToken from local storage
const userToken = localStorage.getItem("userToken")
  ? localStorage.getItem("userToken")
  : null;

const initialState = {
  loading: false,
  userInfo: {}, // for user object
  userToken,
  error: null,
  success: false, // for monitoring the registration process.
  suceesModified: null
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("userToken"); // deletes token from storage
      state.loading = false;
      state.userInfo = null;
      state.userToken = null;
      state.error = null;
    },
  },
  extraReducers: {
    [userLogin.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload;
      state.userToken = payload.userToken;
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    ///////GetUSER
    [getUserDetails.pending]: (state) => {
      state.loading = true;
    },
    [getUserDetails.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload;
    },
    [getUserDetails.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    ////modified profile
    [modifiedProfile.pending]: (state) => {
      state.loading = true;
    },
    [modifiedProfile.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload;
      state.suceesModified = true;
    },
    [modifiedProfile.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },


  },
});

export const userReducer = userSlice.reducer;
export const { logout } = userSlice.actions;
