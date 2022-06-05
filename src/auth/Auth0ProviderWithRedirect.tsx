import { AppState, Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

export const Auth0ProviderWithRedirect = ({
  children
}: {
  children: ReactNode;
}) => {
  const navigate = useNavigate();
  const onRedirectCallback = (appState?: AppState) => {
    navigate((appState && appState.returnTo) || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={import.meta.env.VITE_REACT_APP_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_REACT_APP_AUTH0_CLIENT_ID}
      audience={import.meta.env.VITE_REACT_APP_AUTH0_API_AUDIENCE}
      scope={import.meta.env.VITE_REACT_APP_AUTH0_API_SCOPE}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
      cacheLocation="localstorage"
      useRefreshTokens
    >
      {children}
    </Auth0Provider>
  );
};
