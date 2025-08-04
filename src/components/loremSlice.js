import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("fetchData", () => {
  return axios.get("https://jsonplaceholder.typicode.com/posts/1").then((res) => res.data);
});

const initialState = {
  data: null,
  loading: true,
  error: null,
};

const loremSlice = createSlice({
  name: "lorem",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.data = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.data = null;
      }),
});

export default loremSlice.reducer;
