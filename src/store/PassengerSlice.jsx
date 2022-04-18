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

export const resgisterPassenger = createAsyncThunk(
  "passengers/registerPassenger",

  async ({ ApiUrl, reqConfig }, { rejectWithValue }) => {
    try {
      console.log("post");
      const response = await axios.post(`${ApiUrl}/passenger`, {
        name: reqConfig.name,
        trips: reqConfig.trip,
        airline: reqConfig.airId,
      });
      console.log(response.data._id);

      return response.data._id;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const deleteProfile = createAsyncThunk(
  "passengers/deleteProfile",
  async ({ ApiUrl, id }) => {
    const res = await axios.delete(`${ApiUrl}/passenger/${id}`);

    return res.data;
  }
);

export const editName = createAsyncThunk(
  "passengers/editName",
  async ({ ApiUrl, reqConfiq }) => {
    const res = await axios.patch(`${ApiUrl}/passenger/${reqConfiq.id}`, {
      name: reqConfiq.name,
    });

    console.log(res);
    return res.data;
  }
);

const PassengerSlice = createSlice({
  name: "passengers",
  initialState: {
    page: 0,
    activePage: 0,
    passengers: [],
    profile: {},
    showProfile: false,
    showPassenger: false,
    message: "",
    profileLoading: true,
    regId: 0,
  },
  reducers: {
    resetPassengers(state, _) {
      state.passengers = [];
    },
    incrementPage(state, _) {
      state.page += 1;
    },
    activePageHandler(state, action) {
      state.activePage = action.payload;
    },
    resetFlag(state) {
      state.showProfile = false;
      state.profileLoading = true;
    },
  },
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
      state.showProfile = true;
    },
    [passengerProfile.rejected]: (state, action) => {
      state.message = action.payload;
      state.profileLoading = false;
    },
    [resgisterPassenger.fulfilled]: (state, action) => {
      state.regId = action.payload;
    },
    [resgisterPassenger.rejected]: (state, action) => {},

    [deleteProfile.fulfilled]: (state, action) => {
      state.message = action.payload.message;
      state.showProfile = false;
      state.profileLoading = false;
    },
    [deleteProfile.rejected]: (state, action) => {},
  },
});

export const PassengerActions = PassengerSlice.actions;
export default PassengerSlice;
