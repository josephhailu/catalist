import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import { ComponentType, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../api/types';
import { setToken } from './authSlice';

const useSetCollectionsApiAccessToken = () => {
  const { getAccessTokenWithPopup } = useAuth0();
  const dispatch = useDispatch<AppDispatch>();
  const { token } = useSelector((s: RootState) => s.auth);

  useEffect(() => {
    const getUserAccessToken = async () => {
      if (!token)
        try {
          const accessToken = await getAccessTokenWithPopup({
            authorizationParams: {
              audience: `https://collections/`,
              scope: 'read:collections',
            },
          });
          dispatch(setToken(accessToken ?? ''));
        } catch (e: any) {
          console.log(e.message);
        }
    };

    getUserAccessToken();
  }, [token, getAccessTokenWithPopup, dispatch]);
};

export const AuthenticationGuard = ({
  component,
}: {
  component: ComponentType<object>;
}) => {
  useSetCollectionsApiAccessToken();

  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => (
      <div className="page-layout">
        <div>...Loading</div>
      </div>
    ),
  });

  return <Component />;
};
