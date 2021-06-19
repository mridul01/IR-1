var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var jet1,jet2,jet3,jet4,jets;
var bg;
var j1,j2,j3,j4;

function preload(){
  bg = loadImage("bgImage.png");
  j1 = loadImage("jet1.png");
  j2 = loadImage("jet2.png");
  j3 = loadImage("jet3.png");
  j4 = loadImage("jet4.png");

}


function setup(){

  canvas = createCanvas(displayWidth-50,displayHeight-100);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background(bg);
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
