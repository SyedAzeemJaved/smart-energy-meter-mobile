import { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";

import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

import AuthContextProvider from "./src/context/AuthContextProvider";
import LoadingContextProvider from "./src/context/LoadingContextProvider";

import Navigator from "./src/screens";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins/Poppins-Regular.ttf"),
    Quantico: require("./assets/fonts/Quantico/Quantico-Regular.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AuthContextProvider>
      <LoadingContextProvider>
        <NavigationContainer onReady={onLayoutRootView}>
          <Navigator />
        </NavigationContainer>
      </LoadingContextProvider>
    </AuthContextProvider>
  );
}
