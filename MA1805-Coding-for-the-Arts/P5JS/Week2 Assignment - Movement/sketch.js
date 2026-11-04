let distanceMultiplier = 1;
let BallDistanceColour;


let BallX = 50;
let BallY = 50;

// Empty variable as Distance will = MousePosition - Ball Position

let DistanceX;
let DistanceY;

let TotalDistance

let red = 255;
let green = 255;
let blue = 255;

let MousePositionX; 
let MousePositionY;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(125);
}


function draw() {

  DistanceX = MousePositionX - BallX;
  DistanceY = MousePositionY - BallY;

  
  //The reason for sqrt (Square Root) is because the distance diagonally is longer than horizontally or vertically,
  //Using Square Root insures the ball always moves the same speed no matter what direction its heading
  
  TotalDistance = sqrt(DistanceX * DistanceX + DistanceY * DistanceY );


  // This is checking if the distance is greater than 0, in which case 
  // the ball moves towards the mouse. And as it's multipled by 'TotalDistance'
  // The further away the mouse is, the fater it moves towards is.

  if (TotalDistance > 0) {
    BallX += (DistanceX / TotalDistance) * TotalDistance / 10;
    BallY += (DistanceY / TotalDistance) * TotalDistance / 10;
  }
  
  // This bit below gets the Total Distance and Devides it by 40, which then devides the 
  // Random colour by that amount to make the ball darker the further away it is.
  
  BallDistanceColour = TotalDistance / 40;
  
  fill(random(red) / BallDistanceColour, random(green) / BallDistanceColour , random(blue) / BallDistanceColour);
  circle(BallX, BallY, 20);
  
  mousePosition();
 }
function mousePosition() {
  MousePositionX = mouseX;
  MousePositionY = mouseY;
} 



