import { ActivityIndicator, View } from "react-native";
import AndroidSafeView from "./AndroidSafeView";

export default function Loading() {
  return (
    <AndroidSafeView>
      <View className="w-full h-full bg-white flex items-center justify-center">
        <ActivityIndicator size={42} color="#0F4D38" />
      </View>
    </AndroidSafeView>
  );
}
