export type User = {
  id: string;
  userName: string;
  password: string;
  isLogged: boolean;
  friends: User[];
  enemies: User[];
};
