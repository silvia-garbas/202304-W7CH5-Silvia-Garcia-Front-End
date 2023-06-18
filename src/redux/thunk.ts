import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../models/user";
import { UserRepository } from "../services/user.repository";

export const registerUserAsync = createAsyncThunk<
  User,
  { repo: UserRepository; user: Partial<User> }
>("users/register", async ({ repo, user }) => {
  return await repo.create(user);
});

export const loadUsersAsync = createAsyncThunk(
  "users/load",
  async (repo: UserRepository) => {
    return await repo.getAll();
  }
);
