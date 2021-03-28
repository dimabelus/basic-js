const CustomError = require("../extensions/custom-error");

const chainMaker = {
  link: [],
  getLength() {
    return this.link.length;
  },
  addLink(value) {
    this.link.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (position > 0 && position <= this.link.length) {
      this.link.splice(position - 1, 1);
    } else {
      this.link = [];
      throw "Error";
    }
    return this;
  },
  reverseChain() {
    this.link.reverse();
    return this;
  },
  finishChain() {
    const str = this.link.join("~~");
    this.link = [];
    return str;
  },
};
module.exports = chainMaker;
