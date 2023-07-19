class Caracter {
  constructor(name, marbles) {
    this.name = name;
    this.marbles = marbles;
  }

  sePresenter() {
    console.log(`Je suis ${this.name} et j'ai ${this.marbles}`);
  }
}

export default Caracter;
