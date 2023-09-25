import { View, ImageBackground } from "react-native";

import AndroidSafeView from "../../components/AndroidSafeView";
import CircleButton from "../../components/CircleButton";

import TopBar from "../../components/Welcome/TopBar";
import BodyText from "../../components/Welcome/BodyText";

import Pill from "../../vectors/Welcome/Pill";

export default function Welcome({
  image,
  topBarShouldShowBack,
  bodyPosition,
  bodyTitle,
  bodyBody,
  pillStroke,
  circleButtonHandleClick,
  changeSwiperIndex,
}) {
  return (
    <AndroidSafeView>
      <ImageBackground
        source={image}
        resizeMode="cover"
        className="w-full h-full"
      >
        <View className="min-h-screen mx-10 my-5">
          <TopBar
            shouldShowBack={topBarShouldShowBack}
            changeSwiperIndex={changeSwiperIndex}
          />
          <BodyText position={bodyPosition} title={bodyTitle} body={bodyBody} />

          <View className="w-full absolute bottom-20">
            <View className="flex flex-row items-center justify-between">
              <Pill stroke={pillStroke} />
              <CircleButton handleClick={circleButtonHandleClick} />
            </View>
          </View>
        </View>
      </ImageBackground>
    </AndroidSafeView>
  );
}
