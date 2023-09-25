import { useState } from "react";

import LoadingContext from "./LoadingContext";

import Loading from "../components/Loading";

export default function LoadingContextProvider({ children }) {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}
