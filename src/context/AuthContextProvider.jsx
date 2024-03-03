import { useState } from "react";
import AuthContext from "./AuthContext";

export default function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState({
    email: undefined,
    name: undefined,
    nicNumber: undefined,
    accessToken: undefined,
    isAuthenticated: false,
    hasSeenWelcome: false,
  });
  const host_name = "https://smart-energy-meter-api-production.up.railway.app";

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser, host_name }}>
      {children}
    </AuthContext.Provider>
  );
}
