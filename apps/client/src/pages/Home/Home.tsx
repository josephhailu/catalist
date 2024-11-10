import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../../auth/LoginButton";
import LogoutButton from "../../auth/LogoutButton";
import SignupButton from "../../auth/SignupButton";

const Home = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="nav-bar__buttons">
      {!isAuthenticated && (
        <>
          <SignupButton />
          <LoginButton />
        </>
      )}
      {isAuthenticated && (
        <>
          <LogoutButton />
        </>
      )}
    </div>
  );
};

export default Home;