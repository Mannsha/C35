var database;
var gameState = 0;
var playerCount;
var form, player, game;

//gamestate 0 = wait, fill form
//gamestate 1 = start game after 4 players
//gamestate 2 = game end at finish line

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(400,400);

  game = new Game()
  game.getState()
  game.start()
}

function draw(){
  background("white");
  
  
}
