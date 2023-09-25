import { useContext } from "react";

import AuthContext from "../context/AuthContext";
import LoadingContext from "../context/LoadingContext";

import Loading from "../components/Loading";

import AuthStack from "./Auth";
import WelcomeStack from "./Welcome";
import DashboadStack from "./Dashboard";

export default function Navigator() {
  const { currentUser } = useContext(AuthContext);
  const { loading } = useContext(LoadingContext);

  const Render = () => {
    if (loading) {
      return <Loading />;
    }

    if (currentUser.isAuthenticated) {
      if (currentUser.hasSeenWelcome) {
        return <DashboadStack />;
      } else {
        return <WelcomeStack />;
      }
    }

    return <AuthStack />;
  };

  return <Render />;
}
