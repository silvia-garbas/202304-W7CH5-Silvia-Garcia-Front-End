import { createSlice } from "@reduxjs/toolkit";
import { User } from "../models/user";
import { loadUsersAsync, loginUserAsync, registerUserAsync } from "./thunk";

export type UsersState = {
  users: User[];
  currentUser: User;
};

const initialState = {
  users: [] as User[],
  currentUser: {} as Partial<User>,
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

    builder.addCase(loginUserAsync.fulfilled, (state, { payload }) => ({
      ...state,
      currentUser: payload,
    }));
  },
});

export const ac = sliceUsers.actions;
export default sliceUsers.reducer;
