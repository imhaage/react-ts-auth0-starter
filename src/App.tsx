import React, { useState } from "react";
import { BasicPage } from "pages/BasicPage";
import { ReactRouterPage } from "pages/ReactRouterPage";
import { Auth0ProviderWithRedirect } from "auth/Auth0ProviderWithRedirect";
import { Auth0Provider } from "@auth0/auth0-react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "auth/ProtectedRoute";

export const App = () => {
  const [reactRouterPage, setReactRouterPage] = useState(false);

  return (
    <div>
      <label
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end"
        }}
      >
        With react-router protected routes
        <input
          type="checkbox"
          checked={reactRouterPage}
          onChange={() => {
            setReactRouterPage((prevState) => !prevState);
          }}
        />
      </label>

      {reactRouterPage ? (
        <BrowserRouter>
          <Auth0ProviderWithRedirect>
            <Routes>
              <Route
                path="/"
                element={<ProtectedRoute component={ReactRouterPage} />}
              />
            </Routes>
          </Auth0ProviderWithRedirect>
        </BrowserRouter>
      ) : (
        <Auth0Provider
          domain={import.meta.env.VITE_REACT_APP_AUTH0_DOMAIN}
          clientId={import.meta.env.VITE_REACT_APP_AUTH0_CLIENT_ID}
          audience={import.meta.env.VITE_REACT_APP_AUTH0_API_AUDIENCE}
          scope={import.meta.env.VITE_REACT_APP_AUTH0_API_SCOPE}
          redirectUri={window.location.origin}
          cacheLocation="localstorage"
          useRefreshTokens
        >
          <BasicPage />
        </Auth0Provider>
      )}
    </div>
  );
};
