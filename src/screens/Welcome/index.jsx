import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "./WelcomeScreen";

const Stack = createStackNavigator();

export default function WelcomeStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Welcome"
        options={{
          headerShown: false,
          statusBarStyle: "dark",
          statusBarTranslucent: true,
        }}
        component={WelcomeScreen}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
