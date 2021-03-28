const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    return (
      1 +
      (Array.isArray(arr)
        ? arr.reduce((accumulator, currentValue) => {
            return Math.max(accumulator, this.calculateDepth(currentValue));
          }, 0)
        : -1)
    );
  }
};
