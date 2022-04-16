import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fatchPassenger = createAsyncThunk(
  "passengers/passenger",
  async ({ ApiUrl, page }) => {
    console.log("page Number: ", page);
    const { data } = await axios.get(
      `${ApiUrl}/passenger?page=${page}&size=10`
    );
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
      state.passengers = [];
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
