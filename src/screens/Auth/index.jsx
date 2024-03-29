import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "./LoginScreen";

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        options={{
          headerShown: false,
        }}
        component={LoginScreen}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
