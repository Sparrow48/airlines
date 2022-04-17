import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fatchPassenger = createAsyncThunk(
  "passengers/passenger",
  async ({ ApiUrl, page }) => {
    const { data } = await axios.get(`${ApiUrl}/passenger?page=${page}&size=5`);
    return data.data;
  }
);

export const passengerProfile = createAsyncThunk(
  "passengers/profile",
  async ({ ApiUrl, id }) => {
    const { data } = await axios.get(`${ApiUrl}/passenger/${id}`);
    console.log("data", data);
    return data;
  }
);

const PassengerSlice = createSlice({
  name: "passengers",
  initialState: {
    passengers: [],
    profile: {},
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
    [passengerProfile.fulfilled]: (state, action) => {
      state.profile = action.payload;
    },
    [passengerProfile.rejected]: (state, action) => {},
  },
});

export const airlineActions = PassengerSlice.actions;
export default PassengerSlice;
