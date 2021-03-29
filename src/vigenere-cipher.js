const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(isPlain = true) {
    this.isPlain = isPlain;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.array = this.makeArray();
  }
  makeArray() {
    const a = this.alphabet;
    let array = [];
    for (let i = 0; i < a.length; i++) {
      array[i] = a.slice(i).concat(a.slice(0, i));
    }
    return array;
  }
  encrypt(message, key) {
    return this.crypt(message, key, true);
  }
  decrypt(message, key) {
    return this.crypt(message, key, false);
  }
  crypt(message, key, encrypt) {
    if (!message || !key) {
      throw new Error();
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    while (key.length < message.length) {
      key += key;
    }
    let result = "";
    let keyIndex = 0;
    for (let i = 0; i < message.length; i++) {
      if (message[i] !== " " && this.alphabet.includes(message[i])) {
        if (encrypt) {
          result += this.array[this.alphabet.indexOf(message[i])][
            this.alphabet.indexOf(key[keyIndex])
          ];
        } else {
          result += this.alphabet[
            this.array[this.alphabet.indexOf(key[keyIndex])].indexOf(message[i])
          ];
        }
        keyIndex++;
      } else {
        result += message[i];
      }
    }
    if (!this.isPlain) {
      return result.split("").reverse().join("");
    }
    return result;
  }
}

module.exports = VigenereCipheringMachine;
