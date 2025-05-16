import { createSlice } from "@reduxjs/toolkit";
import {
  fetchContacts,
  deleteContact,
  addContact,
} from "../contacts/operations.js";
import { logout } from "../auth/operations.js";
import toast from "react-hot-toast";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const slice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        toast.error(action.payload);
      })
      .addCase(addContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
        toast.success("Contact successfully added");
      })
      .addCase(addContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        toast.error(action.payload);
      })
      .addCase(deleteContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = state.items.filter((item) => item.id !== action.payload);
        toast.success("Contact successfully deleted");
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        toast.error(action.payload);
      })
      // .addCase(editContact.fulfilled, (state, action) => {})
      .addCase(logout.pending, () => {
        // toast("pending");
      })
      .addCase(logout.fulfilled, () => initialState)
      .addCase(logout.rejected, (state, action) => toast.error(action.payload));
  },
});

export default slice.reducer;
