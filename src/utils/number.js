export default customRoundoff = (num) => {
  let decimalPlaces = 2; // Specify the desired number of decimal places
  if (typeof num === "number") {
    return (
      Math.floor(num * Math.pow(10, decimalPlaces)) /
      Math.pow(10, decimalPlaces)
    ).toFixed(decimalPlaces);
  } else {
    return 0;
  }
};
