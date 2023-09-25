import Welcome from "../../components/Welcome/Welcome";

const image = require("../../../assets/images/welcome/2.png");

export default function WelcomeScreen({ changeSwiperIndex }) {
  return (
    <Welcome
      image={image}
      topBarShouldShowBack={true}
      bodyPosition={"top"}
      bodyTitle={"Custom Built Meter"}
      bodyBody={
        "Measure electricity consumed, and get billed transparently via our in-house advanced meter."
      }
      pillStroke={{
        firstStrokeColor: "#4D5A68",
        secondStrokeColor: "#568C8C",
        thirdStrokeColor: "#4D5A68",
      }}
      circleButtonHandleClick={() => changeSwiperIndex(2)}
      changeSwiperIndex={() => changeSwiperIndex(0)}
    />
  );
}
