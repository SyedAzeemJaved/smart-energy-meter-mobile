import { useState, useEffect, useContext } from "react";
import {
  View,
  ScrollView,
  Image,
  Text,
  Keyboard,
  ToastAndroid,
} from "react-native";

import AuthContext from "../../context/AuthContext";
import LoadingContext from "../../context/LoadingContext";

import AndroidSafeView from "../../components/AndroidSafeView";
import TextBox from "../../components/TextBox";
import PrimaryButton from "../../components/PrimaryButton";

const image = require("../../../assets/images/meter.png");

const textClasses = "font-poppins text-darkgreen text-lg mt-5";

export default function LoginScreen({ navigation }) {
  const { setCurrentUser, host_name } = useContext(AuthContext);
  const { setLoading } = useContext(LoadingContext);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  useEffect(() => {
    const showKeyboard = Keyboard.addListener("keyboardDidShow", () => {
      setIsKeyboardOpen(true);
    });
    const hideKeyboard = Keyboard.addListener("keyboardDidHide", () => {
      setIsKeyboardOpen(false);
    });

    return () => {
      showKeyboard.remove();
      hideKeyboard.remove();
    };
  }, []);

  const handleLogin = async () => {
    try {
      if (!data?.email || !data?.password) {
        throw new Error("Please fill all fields");
      }

      setLoading(true);

      const headers = new Headers();
      headers.append("accept", "application/json");
      headers.append("Content-Type", "application/x-www-form-urlencoded");

      const params = new URLSearchParams();
      params.append("grant_type", "");
      params.append("username", data.email);
      params.append("password", data.password);
      params.append("scope", "");
      params.append("client_id", "");
      params.append("client_secret", "");

      const resp = await fetch(`${host_name}/token`, {
        method: "POST",
        headers,
        body: params.toString(),
      });

      const response = await resp.json();
      if (resp.status !== 200) throw new Error(response?.detail);

      setCurrentUser({
        accessToken: response.access_token,
        isAuthenticated: true,
      });
    } catch (err) {
      ToastAndroid.show(`${err?.message || "Something went wrong"}`, 100);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AndroidSafeView>
      <View className="w-full h-full pt-4">
        <ScrollView
          showsVerticalScrollIndicator={false}
          className="flex gap-y-4 mr-6 ml-6"
        >
          <Image
            source={image}
            resizeMode="contain"
            className="w-50 h-50 mx-auto"
          />
          <Text className={textClasses}>Email</Text>
          <TextBox
            placeholder={"email@smartenergy.com"}
            iconName={"email"}
            secureTextEntry={false}
            objName={"email"}
            setData={setData}
          />
          <Text className={textClasses}>Password</Text>
          <TextBox
            placeholder={"Enter your password here"}
            iconName={"security"}
            secureTextEntry={true}
            objName={"password"}
            setData={setData}
          />
        </ScrollView>
        {!isKeyboardOpen && (
          <View className="absolute bottom-10 w-full">
            <PrimaryButton title={"Login"} handlePress={handleLogin} />
            <View className="flex flex-row justify-center">
              <Text className="text-center text-[16px] text-black mr-1">
                Contact support to create an account
              </Text>
            </View>
          </View>
        )}
      </View>
    </AndroidSafeView>
  );
}
