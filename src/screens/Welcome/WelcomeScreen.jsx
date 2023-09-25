import { useRef } from "react";
import { View } from "react-native";
import Swiper from "react-native-swiper";

import Step1 from "../../screens/Welcome/Step1";
import Step2 from "../../screens/Welcome/Step2";
import Step3 from "../../screens/Welcome/Step3";

export default function WelcomeScreen() {
  const swiperRef = useRef(null);

  // Function to change the Swiper index
  const changeSwiperIndex = (newIndex) => {
    if (swiperRef.current) {
      swiperRef.current.scrollTo(newIndex);
    }
  };

  return (
    <Swiper
      ref={swiperRef}
      loop={false}
      showsButtons={false}
      showsPagination={false}
    >
      {/* Step 1 */}
      <View>
        <Step1 changeSwiperIndex={changeSwiperIndex} />
      </View>

      {/* Step 2 */}
      <View>
        <Step2 changeSwiperIndex={changeSwiperIndex} />
      </View>

      {/* Step 3 */}
      <View>
        <Step3 changeSwiperIndex={changeSwiperIndex} />
      </View>
    </Swiper>
  );
}
