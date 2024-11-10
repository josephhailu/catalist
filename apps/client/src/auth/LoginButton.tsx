import { useAuth0 } from "@auth0/auth0-react";
import Button from "../lib/button/Button";
import { ROUTES } from "../routes/routes";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: ROUTES.INDEX,
      },
    });
  };
  return <Button text="Login" onClick={handleLogin} />;
};

export default LoginButton;
