import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Notiflix from "notiflix";

axios.defaults.baseURL = "https://6481c7c029fa1c5c50320fbf.mockapi.io/api";

export const getAdvertsByQuery = createAsyncThunk(
  "adverts/getAdvertsByQuery",
  async (credentials, thunkAPI) => {
    try {
      const queryURL = `/adverts?page=${credentials.page}&limit=8`;
      const responce = await axios.get(queryURL);
      console.log(responce.data)
        return responce.data;
    } catch (error) {
      Notiflix.Notify.failure(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAdvertsById = createAsyncThunk(
  "adverts/getAdvertsById",
  async (credentials, thunkAPI) => {
    try {
      const queryURL = `/adverts/${credentials.id}`;
      const responce = await axios.get(queryURL);
      return responce.data
    } catch (error) {
       Notiflix.Notify.failure(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)