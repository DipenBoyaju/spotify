import { configureStore } from "@reduxjs/toolkit";
import { artistApi } from "../artists/artistsApi";



export const store = configureStore({
  reducer: {
    [artistApi.reducerPath]: artistApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
    artistApi.middleware
  ])
})