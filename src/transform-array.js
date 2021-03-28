const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let finalArray = [];

  if (!Array.isArray(arr)) throw new Error();
  if (arr.length === 0) return arr;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === undefined) {
      continue;
    }
    switch (arr[i]) {
      case `--discard-next`:
        finalArray.push("discardThatElement");
        i++;
        break;
      case `--discard-prev`:
        if (finalArray.length > 0) {
          finalArray.pop();
        }
        break;
      case `--double-next`:
        if (arr.length - 1 > i) {
          finalArray.push(arr[i + 1]);
        }
        break;
      case `--double-prev`:
        if (finalArray.length > 0) {
          finalArray.push(finalArray[finalArray.length - 1]);
        }
        break;
      default:
        finalArray.push(arr[i]);
        break;
    }
  }

  finalArray = finalArray.filter((element) => element !== "discardThatElement");
  return finalArray;
};
