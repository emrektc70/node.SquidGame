import promptSync from "prompt-sync";

class Utils {
  static prompt = promptSync();

  // générer un chiffre aléatoire pour l'âge
  static generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  static userInput(msg) {
    let resp = this.prompt(msg);
    return resp;
  }
}

export default Utils;
