function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  background(0);
  //P_Hat
  fill(0,0,255);
  circle(200,120,160);
  //P_Propella
  loop()
   fill(0,255,0);
  rect(195,20,10,30,)
  fill(0,0,255);
  arc(170,25,60,20,0, PI);
  fill(255,0,0);
  arc(230,35,60,20,PI,0);
  
  

  
  //Face
  fill(255,255,255);
  circle(200,200,250);
  fill(255,250,255);
  //MainEyes
  circle(140,180,60);
  circle(260,180,60);
  //Iris
  fill(0,0,255);
  circle(140,170,10);
  circle(260,190,10);
  //Mouth
  fill(0,0,0);
  arc(200,230,100,100,0, PI);
  //Tounge
  fill(175,25,75);
  arc(200,270,45,70,0, PI);
  //p_Hat_On_Top
   fill(0,0,255);
  arc(200,90,140,30,0, PI);
}