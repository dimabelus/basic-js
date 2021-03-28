const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let finalString = "";
  options.separator === undefined ? (options.separator = "+") : "";
  options.additionSeparator === undefined
    ? (options.additionSeparator = "|")
    : "";
  options.repeatTimes === undefined ? (options.repeatTimes = 1) : "";
  options.additionRepeatTimes === undefined
    ? (options.additionRepeatTimes = 1)
    : "";
  options.addition === undefined ? (options.additionRepeatTimes = "") : "";

  for (let i = 0; i < options.repeatTimes; i++) {
    finalString += str;
    for (let j = 0; j < options.additionRepeatTimes; j++) {
      finalString += options.addition;
      j < options.additionRepeatTimes - 1
        ? (finalString += options.additionSeparator)
        : "";
    }
    i < options.repeatTimes - 1 ? (finalString += options.separator) : "";
  }
  return finalString;
};
