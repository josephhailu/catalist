import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import Callback from '../pages/Callback/Callback';
import FourOFour from '../pages/404/FourOFour';
import Auth0ProviderLayout from '../auth/Auth0ProviderLayout ';
import { AuthenticationGuard } from '../auth/AuthenticationGuard ';
import Home from '../pages/Home/Home';
import { ROUTES } from './routes';
import Dashboard from '../pages/Dashboard/Dashboard';
import Profile from '../pages/Profile/Profile';
import Layout from '../layouts/Layout';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Auth0ProviderLayout />}>
      <Route element={<Layout />}>
        <Route path={ROUTES.INDEX} element={<Home />} />
        <Route
          path={ROUTES.DASHBOARD}
          element={<AuthenticationGuard component={Dashboard} />}
        />
        <Route
          path={ROUTES.PROFILE}
          element={<AuthenticationGuard component={Profile} />}
        />
        <Route path={ROUTES.CALLBACK} element={<Callback />} />
        <Route path={ROUTES.FOUR0FOUR} element={<FourOFour />} />
      </Route>
    </Route>
  )
);
