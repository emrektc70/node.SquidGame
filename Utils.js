import promptSync from "prompt-sync";
import fs from "fs";

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

  static loadJson(pathJson) {
    let jsonData = fs.readFileSync(pathJson);
    let data = JSON.parse(jsonData);

    return data;
  }
}

export default Utils;
