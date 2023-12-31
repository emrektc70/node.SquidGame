import Game from "./Game.js";
import Utils from "./Utils.js";

//
// CHALLENGE CHARGER LES DONNEÉS VIA UN JSON
//

let data = Utils.loadJson("./data.json");
const game = new Game(
  data["ListHeroes"],
  data["ListEnemies"],
  data["ListLevels"]
);
game.startGame();
