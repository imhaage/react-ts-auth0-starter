import { withAuthenticationRequired } from "@auth0/auth0-react";
import React from "react";
import { ComponentType } from "react";

export const ProtectedRoute = ({
  component,
  ...args
}: {
  component: ComponentType;
}) => {
  const Component = withAuthenticationRequired(component, args);
  return <Component />;
};
