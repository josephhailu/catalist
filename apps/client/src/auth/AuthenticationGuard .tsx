import { withAuthenticationRequired } from "@auth0/auth0-react";
import { ComponentType } from "react";

export const AuthenticationGuard = ({
  component,
}: {
  component: ComponentType<object>;
}) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => (
      <div className="page-layout">
        <div>...Loading</div>
      </div>
    ),
  });

  return <Component />;
};
