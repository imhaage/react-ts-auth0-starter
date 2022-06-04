import React from "react";
import { LoginButton } from "components/LoginButton";
import { User } from "components/User";
import { useAuth0 } from "@auth0/auth0-react";
import { LogoutButton } from "components/LogoutButton";

export const App = () => {
  const { isLoading, isAuthenticated } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="App">
      {!isAuthenticated ? (
        <div>
          <p style={{ fontSize: "1.5rem" }}>Please Login.</p>
          <LoginButton />
        </div>
      ) : (
        <div>
          <LogoutButton />
          <User />
        </div>
      )}
    </div>
  );
};
