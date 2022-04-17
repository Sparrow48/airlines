import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fatchPassenger = createAsyncThunk(
  "passengers/passenger",
  async ({ ApiUrl, page }) => {
    const { data } = await axios.get(`${ApiUrl}/passenger?page=${page}&size=5`);
    return data.data;
  }
);

const PassengerSlice = createSlice({
  name: "passengers",
  initialState: {
    passengers: [],
    showPassenger: false,
  },
  reducers: {},
  extraReducers: {
    [fatchPassenger.fulfilled]: (state, action) => {
      state.passengers.push(...action.payload);
      state.showPassenger = true;
    },
    [fatchPassenger.rejected]: (state, action) => {
      state.showPassenger = false;
    },
  },
});

export const airlineActions = PassengerSlice.actions;
export default PassengerSlice;
