import { createSlice } from "@reduxjs/toolkit";
import { User } from "../models/user";
import { loadUsersAsync, registerUserAsync } from "./thunk";

export type UsersState = {
  users: User[];
  currentUser: User | null;
};

const initialState = {
  users: [] as User[],
  currentUser: null,
};

const sliceUsers = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(registerUserAsync.fulfilled, (state, { payload }) => ({
      ...state,
      users: [...state.users, payload],
    }));

    builder.addCase(loadUsersAsync.fulfilled, (state, { payload }) => ({
      ...state,
      users: payload,
    }));
  },
});

export const ac = sliceUsers.actions;
export default sliceUsers.reducer;
