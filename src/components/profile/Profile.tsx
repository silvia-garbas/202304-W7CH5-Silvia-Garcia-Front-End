import { User } from "../../models/user";

export type PropsType = {
  item: User;
};
export function Profile({ item }: PropsType) {
  return (
    <li>
      <a>{item.userName}</a>
   
    </li>
  );
}
