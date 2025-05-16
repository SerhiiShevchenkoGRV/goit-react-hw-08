import { createSlice } from "@reduxjs/toolkit";
import { editContact } from "./operations";
import toast from "react-hot-toast";

const initialState = {
  id: null,
  name: "",
  number: null,
};

const slice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    changeOnEdit: (state, action) => {
      state.id = action.payload;
    },
    cancelEdit: (state, action) => {
      state.id = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(editContact.pending, (state, action) => {})
      .addCase(editContact.fulfilled, (state, action) => {
        state.contact = action.payload;
        console.log(state.contact);
      })
      .addCase(editContact.rejected, (state, action) => {
        toast.error(action.payload);
      });
  },
});

export const { changeOnEdit, cancelEdit } = slice.actions;
export default slice.reducer;
