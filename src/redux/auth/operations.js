import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const api = axios.create({
  baseURL: "https://connections-api.goit.global",
});

const setAuthHeader = (token) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearAuthHeader = () => {
  api.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (body, thunkAPI) => {
    try {
      const { data } = await api.post("/users/signup", body);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk("auth/login", async (body, thunkAPI) => {
  try {
    const { data } = await api.post("/users/login", body);
    setAuthHeader(data.token);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk(
  "auth/logout",
  async (body, thunkAPI) => {
    try {
      await api.post("/users/logout", body);
      clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (body, thunkAPI) => {
    try {
      const savedToken = thunkAPI.getState().auth.token;
      if (savedToken === null) {
        return thunkAPI.rejectWithValue("Token does not exist");
      }
      setAuthHeader(savedToken);
      const { data } = await api.get("/users/current", body);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
