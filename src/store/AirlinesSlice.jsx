import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllAirlines = createAsyncThunk(
  "airline/airlines",
  async (ApiUrl) => {
    const { data } = await axios.get(`${ApiUrl}/airlines?_size=10`);
    return data;
  }
);

const AirlinesSlice = createSlice({
  name: "airline",
  initialState: {
    airlines: [],
    show: false,
  },
  reducers: {},
  extraReducers: {
    [fetchAllAirlines.fulfilled]: (state, action) => {
      state.airlines.push(...action.payload);
      state.show = true;
    },
    [fetchAllAirlines.rejected]: (state, action) => {
      state.show = false;
    },
  },
});

export const airlineActions = AirlinesSlice.actions;
export default AirlinesSlice;
