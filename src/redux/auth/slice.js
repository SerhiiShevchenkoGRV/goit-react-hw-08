import { createSlice } from "@reduxjs/toolkit";
import { login, logout, refreshUser, register } from "./operations";
import toast from "react-hot-toast";

const initialState = {
  user: {
    name: "",
    email: "",
  },
  token: "",
  isLoggedIn: false,
  isRefreshing: false,
};

const slice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state, action) => {
        // toast("pending");
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        toast.success("Successful registration");
        toast(`Welcome, ${action.payload.user.name}`);
      })
      .addCase(register.rejected, (state, action) => {
        toast.error(action.payload);
      })
      .addCase(login.pending, (state, action) => {
        // toast("pending");
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        toast.success(`Welcome, ${action.payload.user.name}`);
      })
      .addCase(login.rejected, (state, action) => {
        // toast.error(action.payload);
      })
      .addCase(logout.pending, () => {
        // toast("pending");
      })
      .addCase(logout.fulfilled, () => initialState)
      .addCase(logout.rejected, (state, action) => {
        toast.error(action.payload);
      })
      .addCase(refreshUser.pending, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = slice.reducer;
