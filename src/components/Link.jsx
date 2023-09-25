import { Pressable, Text } from "react-native";

export default function Link({ title, handlePress }) {
  return (
    <Pressable onPress={handlePress}>
      <Text className="text-body text-[20px] text-right">{title}</Text>
    </Pressable>
  );
}
