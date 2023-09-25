import { View, Text } from "react-native";

export default function BodyText({ position, title, body }) {
  const positionStyle = position === "bottom" ? "bottom-56" : "top-28";
  return (
    <View className={`w-80 absolute ${positionStyle}`}>
      <Text className="font-quantico text-[28px] text-palette1">{title}</Text>
      <Text className="font-poppins text-[16px] text-body">{body}</Text>
    </View>
  );
}
