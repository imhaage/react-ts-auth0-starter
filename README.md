# react-ts-auth0-starter

- Vite + plugin vite-plugin-mkcert
- React/Typescript
- Auth0

## Features

- Login / Logout buttons
- Display user informations
- Get user custom metadata

Thanks to vite-plugin-mkcert HTTPS is enabled on localhost, Auth0 `getAccessTokenSilently()` can be called with a localhost alias (`app.dev` is set by default in vite.config.ts).

**User consent can't be skipped if locahost is used in URL**
