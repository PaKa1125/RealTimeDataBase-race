var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount, gameState;
var game;
var allPlayers;
var track, car1, car2, car1_img, car2_img;
var cars = []
var fuels, powerCoins, fuelImage, powerCoinImage;
var obstacle1Image, obstacle2Image, obstacles;

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1_img = loadImage("./assets/car1.png");
  car2_img = loadImage("./assets/car2.png");
  track = loadImage("./assets/track.jpg");
  fuelImage = loadImage ("./assets/fuel.png");
  powerCoinImage = loadImage ("./assets/goldCoin.png");
  obstacle1Image = loadImage ("./assets/obstacle1.png");
  obstacle2Image = loadImage ("./assets/obstacle2.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.start();
  game.getState();

}

function draw() {
  background(backgroundImage);
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
