import { SyntheticEvent } from "react";
import { useUsers } from "../../hooks/use.users";
import { User } from "../../models/user";

export default function Register() {
  const { handleRegister } = useUsers();

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const element = event.target as HTMLFormElement;
    const newUser = {
      userName: (element.userName as HTMLInputElement).value,
      password: (element.password as HTMLInputElement).value,
    } as unknown as Partial<User>;
    handleRegister(newUser);
    element.reset();
  };

  return (
    <>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userName">User Name: </label>
          <input type="text" id="userName" name="userName" />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Send</button>
      </form>
    </>
  );
}
