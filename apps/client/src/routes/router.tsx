import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Callback from "../pages/Callback/Callback.tsx";
import FourOFour from "../pages/404/FourOFour.tsx";
import Auth0ProviderLayout from "../auth/Auth0ProviderLayout .tsx";
import { AuthenticationGuard } from "../auth/AuthenticationGuard .tsx";
import Home from "../pages/Home/Home.tsx";
import { ROUTES } from "./routes.ts";

export const router = createBrowserRouter(
  // https://stackoverflow.com/a/73938067/11449115
  createRoutesFromElements(
    <Route element={<Auth0ProviderLayout />}>
      <Route path={ROUTES.INDEX} element={<Home />} />
      <Route
        path={ROUTES.DASHBOARD}
        element={<AuthenticationGuard component={Home} />}
      />

      <Route path={ROUTES.CALLBACK} element={<Callback />} />
      <Route path={ROUTES.FOUR0FOUR} element={<FourOFour />} />
    </Route>
  )
);
