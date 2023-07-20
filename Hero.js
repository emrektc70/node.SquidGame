import Caracter from "./Caracter.js";
import Utils from "./Utils.js";

class Hero extends Caracter {
  constructor(name, marbles, malus, bonus) {
    super(name, marbles);
    this.bonus = bonus;
    this.malus = malus;
  }

  chooseOddOrEven() {
    let answer = Utils.userInput(
      "L'enemie à des billes dans sa main, est-ce un nombre pair - (0) ou impair - (1) ?"
    );
    return answer;
  }

  cheat() {
    let resp = Utils.userInput(
      "Votre ennemi à plus de 70 ans, voulez-vous tricher? Oui - (0) ou Non - (1) ?"
    );

    return resp == 0 ? true : false;
  }

  toString() {
    console.log(
      `${this.name} possède ${this.marbles} billes avec ${this.malus} billes de malus et ${this.bonus} de billes de bonus`
    );
  }

  sePresenter() {
    console.log(
      `Vous démarrez le jeu avec ${this.name} et vous avez dans vos mains ${this.marbles} 10 billes!`
    );
  }
}

export default Hero;
