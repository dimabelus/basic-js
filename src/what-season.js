const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  const dateCalendar = new Date(date);
  const month = dateCalendar.getMonth();
  if (!date) {
    return "Unable to determine the time of year!";
  } else if (Object.prototype.toString.call(date) !== "[object Date]") {
    throw new TypeError();
  } else if (Object.prototype.toString.call(date) === "[object Date]") {
    //console.log(month);
    if (month <= 1 || month === 11) {
      return "winter";
    } else if (month > 1 && month <= 4) {
      return "spring";
    } else if (month > 4 && month <= 7) {
      return "summer";
    } else if (month > 7 && month <= 10) {
      return "fall";
    }
  }
};
