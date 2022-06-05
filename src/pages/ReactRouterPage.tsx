import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const ReactRouterPage = () => {
  const { isLoading, isAuthenticated } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return <div>Protected route</div>;
};
