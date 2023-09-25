import Welcome from "../../components/Welcome/Welcome";

const image = require("../../../assets/images/welcome/1.png");

export default function WelcomeScreen({ changeSwiperIndex }) {
  return (
    <Welcome
      image={image}
      topBarShouldShowBack={false}
      bodyPosition={"bottom"}
      bodyTitle={"Custom Built Meter"}
      bodyBody={
        "Measure electricity consumed, and get billed transparently via our in-house advanced meter."
      }
      pillStroke={{
        firstStrokeColor: "#568C8C",
        secondStrokeColor: "#4D5A68",
        thirdStrokeColor: "#4D5A68",
      }}
      circleButtonHandleClick={() => changeSwiperIndex(1)}
    />
  );
}
