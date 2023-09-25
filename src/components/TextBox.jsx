import { View, TextInput } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function TextBox({
  placeholder,
  iconName,
  secureTextEntry,
  objName,
  setData,
}) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        position: "relative",
        marginTop: 5,
      }}
    >
      <MaterialIcons
        name={iconName}
        size={28}
        color={"#0F4D38"}
        style={{
          position: "absolute",
          right: 14,
          zIndex: 10,
        }}
      />
      <TextInput
        placeholder={placeholder}
        className="w-full h-12 bg-white-700 text-secondary rounded-lg border-2 border-secondary pl-4 pr-12"
        secureTextEntry={secureTextEntry}
        onChangeText={(innerText) => {
          setData((prev) => ({
            ...prev,
            [objName]: innerText,
          }));
        }}
      />
    </View>
  );
}
