import Game from "./Game.js";

const listHeroes = [
  ["Seong Gi-hun", "Cho Sang-woo", "Kang Sae-byeok"],
  [10, 15, 20],
  [3, 2, 1],
  [1, 2, 3],
];

const listEnemies = [
  "Cho-Hea",
  "Dae",
  "Dambi",
  "Ha-Neul",
  "Hea-Jung",
  "Hyun-Ae",
  "Iseul",
  "Jae-Hwa",
  "Saejin",
  "Soo-Yun",
  "Sun-Hi",
  "Yon",
  "Yun",
  "Ae-Cha",
  "Hana",
];

const levels = [
  ["Easy", "Medium", "Impossible"],
  [4, 12, 18],
];

const game = new Game(listHeroes, listEnemies, levels);
console.log(game);
game.startGame();
