import { configureStore } from "@reduxjs/toolkit";
import AirlineSlice from "./AirlinesSlice";

const Store = configureStore({
  reducer: {
    airline: AirlineSlice.reducer,
  },
});

export default Store;
