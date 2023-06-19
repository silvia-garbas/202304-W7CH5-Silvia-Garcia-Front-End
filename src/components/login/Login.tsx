import { SyntheticEvent, useEffect } from "react";
import { useUsers } from "../../hooks/use.users";
import { User } from "../../models/user";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { handleLogin, handleLoad } = useUsers();
  const navigate = useNavigate();

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const element = event.target as HTMLFormElement;
    const loggedUser = {
      user: (element.userName as HTMLInputElement).value,
      password: (element.password as HTMLInputElement).value,
    } as Partial<User>;
    handleLogin(loggedUser as Partial<User>);
    element.reset();
    navigate("/user");
  };

  return (
    <>
      <h2>Log In</h2>
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
