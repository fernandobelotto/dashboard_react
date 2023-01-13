import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  user: any;
  token: string | null;
};

const initialState: InitialState = {
  user: null,
  token: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
    logout(state) {
      state.user = null;
      state.token = null;
    },
  },
});

export const authReducer = authSlice.reducer;
export const { logout, setToken, setUser } = authSlice.actions;
