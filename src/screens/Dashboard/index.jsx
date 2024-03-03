import { createStackNavigator } from "@react-navigation/stack";

import DashboardScreen from "./DashboardScreen";

const Stack = createStackNavigator();

export default function DashboardStack() {
  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen
        name="Dashboard"
        options={{
          headerShown: false,
        }}
        component={DashboardScreen}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
