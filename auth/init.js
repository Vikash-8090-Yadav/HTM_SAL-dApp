import { AuthProvider } from "https://cdn.jsdelivr.net/npm/@arcana/auth/dist/standalone/auth.esm.js";


let auth;
const appId = 2364;
const InitializeAuth = async () => {
  if (!auth) {
    auth = new AuthProvider(appId);
    await auth.init({ appMode: 1, position: "right" });
  }
  return auth;
};

export { InitializeAuth };
