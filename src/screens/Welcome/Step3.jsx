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
      bodyTitle={"Custom Built Meter"}
      bodyBody={
        "Measure electricity consumed, and get billed transparently via our in-house advanced meter."
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
