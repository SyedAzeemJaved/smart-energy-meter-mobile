const moment = require("moment-timezone");

export default handleTimezone = (originalTimestamp) => {
  if (typeof originalTimestamp === "string") {
    const originalMoment = moment(originalTimestamp);
    return originalMoment.add(5, "hours").format("HH:mm:ss");
  } else {
    return "XX:YY:ZZ";
  }
};
