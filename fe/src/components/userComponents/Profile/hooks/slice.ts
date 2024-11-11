import { createSlice } from "@reduxjs/toolkit";
import { IUserProfile } from "../../../../entities/authEntities";
import { getProfileAsync } from "./async";

// export type profileDTO = userStateDTO;

interface profileState {
  entities: IUserProfile;
  loading: boolean;
}
const initialState: profileState = {
  entities: {} as IUserProfile,
  loading: false,
};

export interface UpdateFieldPayload {
  field: keyof profileState;
  value: string;
}

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    // Add your reducers her
  },
  extraReducers: (builder) => {
    // Add your extraReducers here
    builder.addCase(getProfileAsync.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProfileAsync.fulfilled, (state, action) => {
      state.entities = action.payload;
      state.loading = false;
    });
    builder.addCase(getProfileAsync.rejected, (state) => {
      state.loading = false;
    });

    // builder.addCase(editProfileAsync.fulfilled, (state, action) => {
    //   state.entities = action.payload;
    //   state.loading = false;
    // });
    // builder.addCase(editProfileAsync.pending, (state) => {
    //   state.loading = true;
    // })
    // builder.addCase(editProfileAsync.rejected, (state) => {
    //   state.loading = false;
    // });
  },
});
export default profileSlice.reducer;
