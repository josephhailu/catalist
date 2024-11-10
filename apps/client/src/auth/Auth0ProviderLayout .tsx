import { AppState, Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import { Outlet, useNavigate } from 'react-router-dom';

const LoadingOrOutlet = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <div className="">... Loading</div>;
  }
  return <Outlet />;
};

const Auth0ProviderLayout = () => {
  const navigate = useNavigate();

  const domain = import.meta.env.VITE_APP_AUTH0_D12313531qweqe12r1r;
  const clientId = import.meta.env.VITE_APP_AUTH0_Cqweqwr45t35rgerfg345twet42;
  const redirectUri = import.meta.env.VITE_APP_AUTH0_CALLBACK_URL;

  const onRedirectCallback = (appState?: AppState) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  if (!(domain && clientId && redirectUri)) {
    return null;
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      <LoadingOrOutlet />
    </Auth0Provider>
  );
};

export default Auth0ProviderLayout;
