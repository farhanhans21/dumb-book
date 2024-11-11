import { createSlice } from "@reduxjs/toolkit";
import { Iuser, IUserProfile } from "../../entities/authEntities";
import { checkAsync, loginAsync, registerAsync } from "./async";

export interface userStateDTO {
  fullname?: string;
  user?: Iuser;
  role?: string;
  username?: string;
  profile?: IUserProfile;
  token?: string;
}

interface userState {
  entities : userStateDTO;
  loading: boolean;
}

const initialState: userState = {
  entities: {} as userStateDTO,
  loading: false,
}

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    LOGOUT: (state) => {
      
      state.entities = {};
      localStorage.removeItem("token");
      
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginAsync.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.entities.token = action.payload;
    });
    builder.addCase(loginAsync.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(checkAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.entities = action.payload;
    });
    builder.addCase(checkAsync.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(checkAsync.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(registerAsync.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(registerAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.entities.user = action.payload;
    });
    builder.addCase(registerAsync.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { LOGOUT } = authSlice.actions;
export default authSlice.reducer;


