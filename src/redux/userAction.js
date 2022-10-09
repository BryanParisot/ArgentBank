import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const userLogin = createAsyncThunk(
  "user/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "http://localhost:3001/api/v1/user/login",
        { email, password },
        config
      );
      // store user's token in local storage
      localStorage.setItem("userToken", data.body.token);
      return data;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

// userActions.js
export const getUserDetails = createAsyncThunk(
  "user/getUserDetails",
  async (arg, { getState, rejectWithValue }) => {
    try {
      // get user data from store
      //const { user } = getState();

      // configure authorization header with user's token
      const config = {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMTIwODJiZjZkYWE5MzFmN2MxODNhYyIsImlhdCI6MTY2NDUzODEwMywiZXhwIjoxNjY0NjI0NTAzfQ.ElY5CPG6pc8WxKRMZYNe8n3fMa9VbU1jeW0VaRotXLo`,
        },
      };
      const { data } = await axios.post(
        `http://localhost:3001/api/v1/user/profile`,
        {},
        config
      );
      console.log(data)
      return data;
    } catch (error) {
      console.log("azqswx");
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
