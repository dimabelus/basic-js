const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (!(typeof sampleActivity === "string")) {
    return false;
  }

  const floatSampleActivity = parseFloat(sampleActivity);
  if (
    floatSampleActivity > 15 ||
    floatSampleActivity <= 0 ||
    !floatSampleActivity
  ) {
    return false;
  }

  const approxNatAlgOfTwo = 0.693 / HALF_LIFE_PERIOD;
  const radiocarbonAge = Math.ceil(
    Math.log(MODERN_ACTIVITY / floatSampleActivity) / approxNatAlgOfTwo
  );
  return radiocarbonAge;
};
