// import { AuthProvider, AppMode,} from "https://cdn.jsdelivr.net/npm/@arcana/auth/dist/standalone/auth.esm.js";
// import { useEffect, useState } from "react";

// //Config
// // const appId = 2364;

// const appId = '3B01e48556c35033A3Df7BbF8F932Ee42b0dF557';

// let  auth;

// function useArcanaAuth() {
//   const [initialized, setInitialized] = useState(false);

//   const initializeAuth = async () => {
//     if (!auth) {
// //       auth = new AuthProvider(appId);
//       await auth.init({ appMode: 2, position: "right" });
//       setInitialized(true);
//     }
//   }

//   //Check isLoggedIn
//   const isLoggedIn = async () => {
//     if(initialized) {
//       return await auth.isLoggedIn();
//     }
//   }

//   //Social Login

//   const login = async (socialType) => {
//     if(initialized) {
//       await auth.loginWithSocial(socialType);
//     }
//   }

//   //Email Link/ Passwordless login
//   const loginWithLink = async (email) => {
//     if(initialized) {
//       await auth.loginWithLink(email);
//     }
//   }

//   //Getting user Accounts
//   const getAccounts = async () => {
//     if(initialized) {
//       return await auth.provider.request({ method: "eth_accounts" });
//     }
//   }

//   //Logout
//   const logout = async () => {
//     if(initialized) {
//       return await auth.logout();
//     }
//   }

//   return {
//     initializeAuth,
//     isLoggedIn,
//     login,
//     loginWithLink,
//     getAccounts,
//     logout,
//     initialized,
//   };
// }

// export default useArcanaAuth;



import { AuthProvider, AppMode} from "https://cdn.jsdelivr.net/npm/@arcana/auth@0.1.3/dist/standalone/auth.esm.js";
import { useEffect, useState } from "react";

//Config
// const appId = 2364;

const appId = "3B01e48556c35033A3Df7BbF8F932Ee42b0dF557";

let auth;
// let auth = new AuthProvider(appId);

function useArcanaAuth() {
  const [initialized, setInitialized] = useState(false);

  
  const initializeAuth = async () => {
    if (!auth) {
      auth = new AuthProvider(appId);
      await auth.init({ appMode: 2, position: "right" });
      setInitialized(true);
    }
  }
//   const initializeAuth = async () => {
//     await auth.init({ appMode: 2, position: "right" });
//     setInitialized(true);
//   };

  //Check isLoggedIn
  const isLoggedIn = async () => {
    if (initialized) {
      return await auth.isLoggedIn();
    }
  };

  //Social Login

  const login = async (socialType) => {
    if (initialized) {
      await auth.loginWithSocial(socialType);
    }
  };

  //Email Link/ Passwordless login
  const loginWithLink = async (email) => {
    if (initialized) {
      await auth.loginWithLink(email);
    }
  };

  //Getting user Accounts
  const getAccounts = async () => {
    if (initialized) {
      return await auth.provider.request({ method: "eth_accounts" });
    }
  };

  //Logout
  const logout = async () => {
    if (initialized) {
      return await auth.logout();
    }
  };

  return {
    initializeAuth,
    isLoggedIn,
    login,
    loginWithLink,
    getAccounts,
    logout,
    initialized,
  };
}


export default useArcanaAuth;
