import { createAsyncThunk } from "@reduxjs/toolkit";

import { api } from "../../libs/api";
import axios from "axios";
import { Iuser } from "../../entities/authEntities";

export const loginAsync = createAsyncThunk<
  string,
  { username: string; password: string }
>( // return sebelah kiri adalah untuk return maunya apa,
  //kanan adalah parameter yang berkaitan datanya

  "auth/login",
  async (data, thunkAPI) => {
    try {
      if (!data.username || !data.password) {
        return thunkAPI.rejectWithValue("Please get Out");
      }

      const response = await api.post("/auth/login", data);

      if (response.status !== 200) {
        console.log(response.data.massage);
      }

      localStorage.setItem("token", response.data.token);

      console.log(response.data.token);

      return response.data.token;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return thunkAPI.rejectWithValue(error.response?.data.massage);
      } else if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);
export const checkAsync = createAsyncThunk<
  { token: string; user: Iuser },
  undefined
>("auth/check", async (_, thunkAPI) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      console.log("gabisa goblok");
    }

    const response = await api.get(`/auth/authCheck`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response);
    return response.data;
  } catch (error: any) {
    console.log(error);
    return thunkAPI.rejectWithValue((error as Error).message);
  }
});

export const registerAsync = createAsyncThunk<
  undefined,
  { email: string; password: string; fullname: string; role: string }
>("auth/register", async (data, thunkAPI) => {
  try {
    const response = await api.post("/auth/register", data);

    if (response.status !== 200) {
      console.log(response.data.message);
    }
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return thunkAPI.rejectWithValue(error.message);
    } else if (error instanceof Error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
});
