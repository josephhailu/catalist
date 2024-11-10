import { useAuth0 } from "@auth0/auth0-react";
import Button from "../lib/button/Button";

const LogoutButton = () => {
  const { logout } = useAuth0();

  const handleLogout = async () => {
    await logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };
  return <Button text="Logout" onClick={handleLogout} />;
};

export default LogoutButton;
