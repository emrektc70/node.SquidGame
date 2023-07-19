import Caracter from "./Caracter.js";

class Hero extends Caracter {
  constructor(name, marbles, bonus, malus) {
    super(name, marbles);
    this.bonus = bonus;
    this.malus = malus;
  }

  fightEnemy() {
    this.chooseOddOrEven();
  }

  chooseOddOrEven() {
    this.compareValues();
  }

  compareValues() {}
  cheat() {}

  toString() {
    console.log(
      `${this.name} possede ${this.marbles}  est son age est ${this.age}`
    );
  }
}

export default Hero;
