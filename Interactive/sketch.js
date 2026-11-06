let myFill = 255;
let x = 200; 
let y = 200; 
let w = 100;
let h = 50;
let count = 0; 
let size = 40;
let speed = 2;
let score = "";
let colourCollided = "";


function setup() {
  createCanvas(400, 400); 
  rectMode(CORNER); 
  x=width/2;
  y=height/2;

}

function draw(){
  background(100); 
  Entity()
  Collider()
  Score()

   fill(255)
 textSize(20);
 textAlign(LEFT,TOP)
 text(score, x+50 ,y+50 )

}
function Collider(){
ellipse(mouseX, mouseY, size);
let distance = dist(x,y,mouseX,mouseY);
if(distance <= size/2){
   score ++;
   colourCollided = [255,0,0];
}
else {
     colourCollided = 255;
   };
};
function Entity() {
fill (colourCollided);
  circle(x, y, size);
  x = x % width;
  
  if (x < 50) {
    y+=speed
    y = y % height;
  };
  x+=speed;
}
function Score(){
   
   
  


};