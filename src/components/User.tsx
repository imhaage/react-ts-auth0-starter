import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const User = () => {
  const [userMetadata, setUserMetadata] = useState();
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  const [userMetadataLoadingState, setUserMetadataLoadingState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = import.meta.env.VITE_REACT_APP_AUTH0_DOMAIN;

      try {
        setUserMetadataLoadingState("loading");

        const accessToken = await getAccessTokenSilently({
          audience: `https://${domain}/api/v2/`,
          scope: "read:current_user"
        });

        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user?.sub}`;

        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });

        const { user_metadata } = await metadataResponse.json();

        setUserMetadata(user_metadata);
        setUserMetadataLoadingState("success");
      } catch (e) {
        console.error(e.message);
        setUserMetadataLoadingState("error");
      }
    };

    getUserMetadata();
  }, [getAccessTokenSilently, user?.sub]);

  return isAuthenticated && user ? (
    <div>
      <img src={user.picture} alt={user.name} />
      <h2>{user.name}</h2>
      <p>Email : {user.email}</p>

      <pre>
        <code>{JSON.stringify(user, null, 2)}</code>
      </pre>

      <pre>
        <code>
          {userMetadataLoadingState === "loading"
            ? "Loading user metadata..."
            : userMetadataLoadingState === "success"
            ? JSON.stringify(userMetadata, null, 2)
            : "Oh no..."}
        </code>
      </pre>
    </div>
  ) : (
    <div>Oh no... :(</div>
  );
};
