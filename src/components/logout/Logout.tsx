import { useNavigate } from "react-router-dom";
import { useUsers } from "../../hooks/use.users";

export default function Logout() {
  const { handleLogout } = useUsers();
  const navigate = useNavigate();

  const handleClick = () => {
    handleLogout();
    navigate("/");
  };

  return (
    <>
      <button className="logout" onClick={handleClick}>
        Log Out
      </button>
    </>
  );
}
