import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllAirlines = createAsyncThunk(
  "airline/airlines",
  async (ApiUrl) => {
    const { data } = await axios.get(`${ApiUrl}/airlines`);
    return data;
  }
);

export const airlinesDetails = createAsyncThunk(
  "airline/details",
  async ({ ApiUrl, id }) => {
    const { data } = await axios.get(`${ApiUrl}/airlines/${id}`);
    return data;
  }
);

const AirlinesSlice = createSlice({
  name: "airline",
  initialState: {
    airlines: [],
    airlinesDetail: {},
    showDetails: false,
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
    [airlinesDetails.fulfilled]: (state, action) => {
      state.airlinesDetail = action.payload;
      state.showDetails = true;
    },
    [airlinesDetails.rejected]: (state, action) => {
      state.showDetails = false;
    },
  },
});

export const airlineActions = AirlinesSlice.actions;
export default AirlinesSlice;
