import { useAuth0 } from "@auth0/auth0-react";
import Button from "../lib/button/Button";
import { ROUTES } from "../routes/routes";

const SignupButton = () => {
  const { loginWithRedirect } = useAuth0();
  const handleSignUp = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: ROUTES.INDEX,
      },
      authorizationParams: {
        screen_hint: "signup",
      },
    });
  };
  return <Button text="Sign Up" onClick={handleSignUp} />;
};

export default SignupButton;
