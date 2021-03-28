const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const object = {
    turns: 0,
    seconds: 0,
  };
  object["turns"] = 2 ** disksNumber - 1;
  object["seconds"] = Math.floor(object.turns / (turnsSpeed / 3600));
  return object;
};
