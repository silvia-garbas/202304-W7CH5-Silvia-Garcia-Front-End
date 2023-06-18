import { useEffect } from "react";
import { useUsers } from "../../hooks/use.users";
import { Profile } from "../profile/Profile";

export default function List() {
  const { users, handleLoad } = useUsers();
  console.log(users);
  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  return (
    <>
      <h1>People</h1>
      <ul>
        {users.map((item) => (
          <Profile item={item} key={item.userName}></Profile>
        ))}
      </ul>
    </>
  );
}
