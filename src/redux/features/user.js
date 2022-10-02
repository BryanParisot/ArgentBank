import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: {
    email: "",
    token: "",
    connect: "",
  },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setConnect: (state, action) => {
      state.connect = action.payload;
    },
  },
});

export const { setEmail, setToken, setConnect } = user.actions;

export const userReducer = user.reducer;
