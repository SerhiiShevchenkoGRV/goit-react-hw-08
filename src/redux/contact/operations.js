import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../auth/operations";

export const editContact = createAsyncThunk(
  "contacts/editContact",
  async (body, thunkAPI) => {
    const { name, number, id } = body;
    try {
      const { data } = await api.patch(`/contacts/${id}`, { name, number });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
