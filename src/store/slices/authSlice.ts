import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "./userSlice";

interface IAuthSliceState {
  user: IUser | null;
}

const initialState: IAuthSliceState = {
  user: null,
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

export default authSlice.reducer;
export const { setUser } = authSlice.actions;
