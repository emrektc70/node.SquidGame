import Caracter from "./Caracter.js";

class Enemy extends Caracter {
  constructor(name, marbles, age) {
    super(name, marbles);
    this.age = age;
  }

  toString() {
    console.log(
      `${this.name} possède ${this.marbles} billes et est agé de ${this.age} ans`
    );
  }
}

export default Enemy;
