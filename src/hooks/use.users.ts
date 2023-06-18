import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { useCallback, useMemo } from "react";
import { User } from "../models/user";
import { loadUsersAsync, registerUserAsync } from "../redux/thunk";
import { UserRepository } from "../services/user.repository";

export function useUsers() {
  const userUrl = "http://localhost:4400/user/";
  const repo: UserRepository = useMemo(() => new UserRepository(userUrl), []);
  const { users } = useSelector((state: RootState) => state.users);
  const dispatch: AppDispatch = useDispatch();

  const handleLoad = useCallback(() => {
    dispatch(loadUsersAsync(repo));
  }, [repo, dispatch]);

  const handleregister = async (user: User) => {
    dispatch(registerUserAsync({ repo, user }));
  };

  return {
    users: users,
    handleregister,
    handleLoad,
  };
}
