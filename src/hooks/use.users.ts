import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState, store } from "../store/store";
import { useCallback, useMemo } from "react";
import { User } from "../models/user";
import {
  loadUsersAsync,
  loginUserAsync,
  registerUserAsync,
} from "../redux/thunk";
import { UserRepository } from "../services/user.repository";

export function useUsers() {
  const userUrl = "http://localhost:4400/user/";
  const repo: UserRepository = useMemo(() => new UserRepository(userUrl), []);
  const { users, currentUser } = useSelector((state: RootState) => state.users);
  const dispatch: AppDispatch = useDispatch();

  const handleLoad = useCallback(() => {
    dispatch(loadUsersAsync(repo));
  }, [repo, dispatch]);

  const handleRegister = async (user: Partial<User>) => {
    dispatch(registerUserAsync({ repo, user }));
  };

  const handleLogin = async (user: Partial<User>) => {
    await dispatch(loginUserAsync({ repo, user }));
    const currentUser = store.getState().users.currentUser;
    localStorage.setItem("userToken", currentUser.token as string);
  };

  const handleLogout = () => {
    localStorage.removeItem("userToken");
  };

  return {
    users: users,
    currentUser: currentUser,
    handleRegister,
    handleLoad,
    handleLogin,
    handleLogout,
  };
}
