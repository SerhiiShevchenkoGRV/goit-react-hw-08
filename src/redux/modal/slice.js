import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "modal",
  initialState: {
    isContactModalOpen: false,
    contactId: null,
  },
  reducers: {
    openModal: (state, action) => {
      state.isContactModalOpen = true;
      state.contactId = action.payload;
    },
    closeModal: (state) => {
      state.isContactModalOpen = false;
      state.contactId = null;
    },
  },
});

export const { openModal, closeModal } = slice.actions;
export default slice.reducer;
