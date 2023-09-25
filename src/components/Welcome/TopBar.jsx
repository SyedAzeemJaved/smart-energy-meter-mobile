import { useContext, useState } from "react";

import { View, TouchableOpacity } from "react-native";
import Link from "../../components/Link";
import AntDesign from "@expo/vector-icons/AntDesign";

import AuthContext from "../../context/AuthContext";

export default function TopBar({ shouldShowBack, changeSwiperIndex }) {
  const { setCurrentUser } = useContext(AuthContext);

  const containerStyleClass = shouldShowBack
    ? "flex flex-row items-center justify-between"
    : "";
  const handleSkip = () => {
    setCurrentUser((prev) => ({
      ...prev,
      hasSeenWelcome: true,
    }));
  };
  return (
    <View className={containerStyleClass}>
      {shouldShowBack && (
        <TouchableOpacity onPress={changeSwiperIndex}>
          <AntDesign name="left" size={32} color="grey" />
        </TouchableOpacity>
      )}
      <Link title={"Skip"} handlePress={handleSkip} />
    </View>
  );
}
