import { TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function CircleButton({ handleClick }) {
  return (
    <TouchableOpacity
      className="bg-darkgreen rounded-full w-[88px] h-[88px] flex items-center justify-center"
      onPress={handleClick}
    >
      <AntDesign name="right" size={40} color="white" />
    </TouchableOpacity>
  );
}
