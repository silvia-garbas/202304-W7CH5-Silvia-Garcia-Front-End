export type User = {
  id: string;
  userName: string;
  password: string;
  token: string;
  friends: User[];
  enemies: User[];
};
