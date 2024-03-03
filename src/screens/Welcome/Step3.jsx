import { useContext } from "react";
import Welcome from "../../components/Welcome/Welcome";

import AuthContext from "../../context/AuthContext";

const image = require("../../../assets/images/welcome/3.png");

export default function WelcomeScreen({ changeSwiperIndex }) {
  const { setCurrentUser } = useContext(AuthContext);
  const handleSkip = () => {
    setCurrentUser((prev) => ({
      ...prev,
      hasSeenWelcome: true,
    }));
  };

  return (
    <Welcome
      image={image}
      topBarShouldShowBack={true}
      bodyPosition={"bottom"}
      bodyTitle={"Complete System"}
      bodyBody={
        "Our advanced system ensures distruption free electricity usage monitoring, protected with cyber security measures."
      }
      pillStroke={{
        firstStrokeColor: "#4D5A68",
        secondStrokeColor: "#4D5A68",
        thirdStrokeColor: "#568C8C",
      }}
      circleButtonHandleClick={handleSkip}
      changeSwiperIndex={() => changeSwiperIndex(1)}
    />
  );
}
