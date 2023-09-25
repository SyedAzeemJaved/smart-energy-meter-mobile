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
  const [ipAddress, setIpAddress] = useState(undefined);

  return (
    <AuthContext.Provider
      value={{ currentUser, setCurrentUser, ipAddress, setIpAddress }}
    >
      {children}
    </AuthContext.Provider>
  );
}
