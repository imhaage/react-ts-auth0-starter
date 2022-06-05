import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "components/LoginButton";
import { LogoutButton } from "components/LogoutButton";
import { User } from "components/User";

export const BasicPage = () => {
  const { isLoading, isAuthenticated } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {!isAuthenticated ? (
        <div>
          <LoginButton />
        </div>
      ) : (
        <div>
          <div style={{ marginBottom: "2rem" }}>
            <LogoutButton />
          </div>
          <User />
        </div>
      )}
    </div>
  );
};
