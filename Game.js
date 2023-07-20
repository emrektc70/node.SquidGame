import Enemy from "./Ennemy.js";
import Hero from "./Hero.js";
import Utils from "./Utils.js";

class Game {
  constructor(listHeroes, listEnemies, listLevels) {
    this.listHeroes = this.createHeroes(listHeroes);
    this.listEnemies = this.createEnemies(listEnemies);
    this.hero = new Hero();
    this.listLevels = listLevels;
    this.nbrEncounter = 0;
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

  compareValues(userAnswer, enemy, enemyIndex) {
    // si c'est pair j'ai gagné
    // ou si c'est impair j'ai gagné
    if (
      (userAnswer % 2 == 0 && enemy.marbles % 2 == 0) ||
      (userAnswer % 2 != 0 && enemy.marbles % 2 != 0)
    ) {
      console.log(
        "Bravo, c'est gagné, vous remportez " +
          enemy.marbles +
          " billes + votre bonus de " +
          this.hero.bonus +
          " billes !"
      );
      this.hero.marbles += enemy.marbles + this.hero.bonus;
      this.listEnemies.splice(enemyIndex, 1); // je supprime l'ennemie de ma liste d'ennemies
    }
    // sinon c'est perdu
    else {
      this.hero.marbles -= enemy.marbles + this.hero.malus;
      this.listEnemies[enemyIndex].marbles += enemy.marbles; // je donne une partie de mes billes à l'ennemie
      console.log(
        "HAHAHA, c'est perdu, vous perdez " +
          enemy.marbles +
          " billes - votre malus de " +
          this.hero.malus +
          " billes !"
      );
      console.log(
        "Grâce à vous, votre enemie a maintenant dans ses mains " +
          this.listEnemies[enemyIndex].marbles +
          " billes !"
      );
    }
  }

  handleEncounter(enemy, enemyIndex) {
    let userAnswer = this.hero.chooseOddOrEven();
    console.log("Votre enemie a dans ses mains " + enemy.marbles + " billes !");
    this.compareValues(userAnswer, enemy, enemyIndex);

    if (this.hero.marbles > 0) {
      console.log(
        "Après ce combat il vous reste " + this.hero.marbles + " billes !"
      );
    } else {
      console.log("HAHAHAHHA, you looose !");
    }
  }

  startFights() {
    while (this.hero.marbles > 0 && this.nbrEncounter > 0) {
      console.log(`Rencontre n° ${this.nbrEncounter}`);

      // selectionner un ennemie aléatoirement
      let enemyIndex = Utils.generateRandomNumber(0, this.listEnemies.length);
      let enemy = this.listEnemies[enemyIndex]; // enemy à affronter

      // regarder si il a plus de 70 ans
      if (enemy.age > 70) {
        // demandeer au user si il veut tricher
        let cheat = this.hero.cheat();

        if (cheat) {
          // si il veut tricher
          // faire gagner directement le héro
          this.hero.marbles += enemy.marbles;
          this.listEnemies.splice(enemyIndex); // l'ennemi est supprimé
          this.nbrEncounter--;
          continue;
        } else {
          console.log("Votre comportement est noble, bonne chance !");
        }
      }

      // sinon
      this.handleEncounter(enemy, enemyIndex);
      // affronter l'ennemi

      this.nbrEncounter--;
    }

    endGame();
  }

  endGame() {
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
