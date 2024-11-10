import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../../auth/LoginButton';
import LogoutButton from '../../auth/LogoutButton';
import SignupButton from '../../auth/SignupButton';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';

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
          <NavLink to={ROUTES.DASHBOARD}>Dashboard</NavLink>
          <LogoutButton />
        </>
      )}
    </div>
  );
};

export default Home;
