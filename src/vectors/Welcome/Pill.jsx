import Svg, { Path } from "react-native-svg";

export default function Pill({ stroke }) {
  const firstStrokeColor = stroke.firstStrokeColor;
  const secondStrokeColor = stroke.secondStrokeColor;
  const thirdStrokeColor = stroke.thirdStrokeColor;

  return (
    <Svg
      width="169"
      height="12"
      viewBox="0 0 169 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M6 6H49"
        stroke={firstStrokeColor}
        strokeWidth="12"
        strokeLinecap="round"
      />
      <Path
        d="M71 6H106"
        stroke={secondStrokeColor}
        strokeWidth="12"
        strokeLinecap="round"
      />
      <Path
        d="M128 6H163"
        stroke={thirdStrokeColor}
        strokeWidth="12"
        strokeLinecap="round"
      />
    </Svg>
  );
}
