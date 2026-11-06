let size = 20;
let Eaten = 0;
let speed = 20;
let spawnedFood = 0;
let x = 100;
let y = 100;
let spawnedFoodX = [];
let spawnedFoodY = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  Food();
  Stats();
  Player();
  Collision();
  Collider();
}

function Food() {
  fill(255);
  if (spawnedFood < 100) {
    ellipse(random(0, windowWidth), random(0, windowHeight), 5, 5);
    spawnedFood++;
  }
}

function Player() {
  fill(0, 255, 0);
  circle(mouseX, mouseY, size);
}

function Collision() {
  if (dist(mouseX, mouseY, x, y) < size / 2 + 5) {
    spawnedFood++;
    background(0);
  }
}
function Collider(){
let distance = dist(spawnedFoodX, spawnedFoodY, mouseX, mouseY);
if(distance <= size/2){
 }
}
function Stats() {
  fill(255,0,0);
  textSize(20);
  textAlign(LEFT, TOP);
  text("Food: " + spawnedFood, 10, 10);
} 