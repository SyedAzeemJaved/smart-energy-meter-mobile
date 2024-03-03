import Welcome from "../../components/Welcome/Welcome";

const image = require("../../../assets/images/welcome/2.png");

export default function WelcomeScreen({ changeSwiperIndex }) {
  return (
    <Welcome
      image={image}
      topBarShouldShowBack={true}
      bodyPosition={"top"}
      bodyTitle={"Save Electricity"}
      bodyBody={
        "Always be in control - efficiently consume electricity and save both money and resources."
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
