import { configureStore } from "@reduxjs/toolkit";
import AirlineSlice from "./AirlinesSlice";
import PassengerSlice from "./PassengerSlice";

const Store = configureStore({
  reducer: {
    airline: AirlineSlice.reducer,
    passengers: PassengerSlice.reducer,
  },
});

export default Store;
