const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let membersArray = [];

  if (members === null) {
    return false;
  } else {
    if (members != null && members.length > 0) {
      for (let i = 0; i < members.length; i++) {
        if (typeof members[i] === "string") {
          membersArray.push(members[i].trim().toUpperCase().slice(0, 1));
        }
      }
    }
    if (membersArray.length <= 0) {
      return false;
    } else {
      return membersArray.sort().join("");
    }
  }
};
