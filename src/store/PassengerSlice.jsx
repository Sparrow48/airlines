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
  async ({ ApiUrl, id }, { rejectWithValue }) => {
    const { data } = await axios.get(`${ApiUrl}/passenger/${id}`);
    console.log("data", data);

    if (!data) {
      return rejectWithValue(" Passenger Profile Nor Found !!!");
    }
    return data;
  }
);

export const deleteProfile = createAsyncThunk(
  "passengers/deleteProfile",
  async ({ ApiUrl, id }) => {
    const res = await axios.delete(`${ApiUrl}/passenger/${id}`);

    return res.data;
  }
);

const PassengerSlice = createSlice({
  name: "passengers",
  initialState: {
    passengers: [],
    profile: {},
    showPassenger: false,
    message: "",
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
    [passengerProfile.rejected]: (state, action) => {
      state.message = action.payload;
    },
    [deleteProfile.fulfilled]: (state, action) => {
      state.message = action.payload;
    },
    [deleteProfile.rejected]: (state, action) => {},
  },
});

export const airlineActions = PassengerSlice.actions;
export default PassengerSlice;
