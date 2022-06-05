# react-ts-auth0-starter

- Vite + plugin vite-plugin-mkcert
- React v18
- Typescript
- Auth0 : `<Auth0Provider>` + `useAuth0()` hook

## Features

- Login / Logout buttons
- Get user custom metadata from Auth0 Management API (fetch API with access token from `getAccessTokenSilently()`)
- Protected routes with react-router v6
- Works with browsers blocking 3rd party cookies (Safari, Brave) : `useRefhesTokens` props + refresh token rotation + automatic reuse detection + cache location -> localStorage

### User consent and applications

vite-plugin-mkcert enables HTTPS on localhost. With a localhost alias (`app.dev` is set by default in vite.config.ts) consent can be skipped and `getAccessTokenSilently()` doesn't throw a _Consent required_ error.

**Allowed callback URLs must not include `localhost`**

<https://auth0.com/docs/get-started/applications/confidential-and-public-applications/user-consent-and-third-party-applications#revoke-consent>
