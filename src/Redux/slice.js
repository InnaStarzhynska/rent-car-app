import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { getAdvertsByQuery } from "./operations";

const initialState = {
  adverts: [],
  favorites: [],
  isLoading: false,
  page: 1,
  //   totalPages: 1
};

const advertsSlice = createSlice({
  name: "adverts",
  initialState,
    extraReducers: (builder) => {
        builder.addCase(getAdvertsByQuery.fulfilled, (state, { payload }) => {
          state.adverts = payload
      })
  },
});

const persistConfig = {
  key: "adverts",
  storage,
  whitelist: ["adverts", "favorites"],
};

export const advertsReducer = persistReducer(
  persistConfig,
  advertsSlice.reducer
);
