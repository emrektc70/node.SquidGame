import Enemy from "./Ennemy.js";
import Hero from "./Hero.js";
import Utils from "./Utils.js";

class Game {
  enemy;
  enemyIndex;

  constructor(listHeroes, listEnemies, listLevels) {
    this.listHeroes = this.createHeroes(listHeroes);
    this.listEnemies = this.createEnemies(listEnemies);
    this.hero = new Hero();
    this.listLevels = listLevels;
    this.nrbEncounter = 0;
  }

  createHeroes(listHeroes) {
    console.log("-- création des héros");

    let listObjectsHero = [];
    for (let i = 0; i < listHeroes[0].length; i++) {
      let hero = new Hero(
        listHeroes[0][i],
        listHeroes[1][i],
        listHeroes[2][i],
        listHeroes[3][i]
      );
      hero.toString();
      listObjectsHero.push(hero);
    }

    return listObjectsHero;
  }

  createEnemies(listEnemies) {
    console.log("-- création des ennemies");

    let listObjectsEnemy = [];
    listEnemies.forEach((enemy) => {
      let enemyCreated = new Enemy(
        enemy,
        Utils.generateRandomNumber(1, 20),
        Utils.generateRandomNumber(40, 90)
      );

      enemyCreated.toString();

      listObjectsEnemy.push(enemyCreated);
    });

    return listObjectsEnemy;
  }

  handleEncounter() {}

  startFights() {
    while (this.hero.marbles > 0 && this.nrbEncounter > 0) {
      this.handleEncounter();

      // selectionner un ennemie aléatoirement
      // regarder si il a plus de 70 ans
      // demandeer au user si il veut tricher
      // si il veut tricher
      // faire gagner directement le héro
      // sinon
      // affronter l'ennemi
      // sinon affronter l'ennemi

      this.nrbEncounter--;
    }

    if (this.hero.marbles > 0) {
      console.log("YOU WOOON");
    } else {
      console.log("YOU WIN");
    }
  }

  selectHero() {
    this.hero =
      this.listHeroes[
        Utils.userInput(
          "Which player will you be? Seong Gi-hun (0) - Kang Sae-byeok (1) - Cho Sang-woo (2)"
        )
      ];

    this.hero.sePresenter();
  }

  selectLevel() {
    let answer = parseInt(
      Utils.userInput(
        "Choose a dificulty : Easy (0) - Medium (1) - Impossible (2)"
      )
    );
    console.log(answer);
    this.nbrEncounter = this.listLevels[1][answer];
    console.log(this.listLevels);

    console.log(`Vous devez survivre à ${this.nbrEncounter} rencontres !`);
  }

  startGame() {
    this.selectHero();
    this.selectLevel();
    this.startFights();
  }
}

export default Game;
