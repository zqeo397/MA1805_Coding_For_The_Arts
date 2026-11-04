


function setup() {
  createCanvas(500, 500);
  background(155);
}

function draw() {



  //HeadFin
  fill(255, 195, 35);
  arc(200, 75, 50, 75, PI, TWO_PI);

  //DevilHorns
  fill(255, 0, 0);
  push();
  //LeftHorn
  translate(120, 100);
  rotate(radians(-45));
  arc(0, 0, 35, 75, PI, TWO_PI);
  pop();
  push();
  //RightHorn
  translate(280, 100);
  rotate(radians(45));
  arc(0, 0, 35, 75, PI, TWO_PI);
  pop();

  //body
  fill(0, 155, 0);
  circle(200, 340, 230);
  fill(235);
  circle(200, 340, 200);
  fill(125);
  arc(200, 390, 165, 110, 0, PI);

  push();
  //LeftHand
  translate(300, 340);
  scale(0.8);
  rotate(radians(-25));
  stroke(30);
  strokeWeight(5);
  fill(205, 35, 45);
  ellipse(0, 0, 130, 90);
  //Nails
  fill(245);
  ellipse(55, 20, 50, 25);
  ellipse(55, -20, 50, 25);
  //YellowCircle
  stroke(80, 40, 20);
  strokeWeight(4);
  fill(255, 195, 35);
  ellipse(-20, 0, 45, 45);
  pop();

  //RightHand
  push();
  translate(100, 340);
  scale(0.8);
  rotate(radians(25));
  stroke(30);
  strokeWeight(5);
  fill(205, 35, 45);
  ellipse(0, 0, 130, 90);
  //Nails
  fill(245);
  ellipse(-55, 20, 50, 25);
  ellipse(-55, -20, 50, 25);
  //YellowCircle
  stroke(80, 40, 20);
  strokeWeight(4);
  fill(255, 195, 35);
  ellipse(20, 0, 45, 45);
  pop();

  stroke(0);
  //BubHead
  fill(0, 255, 0);
  circle(200, 190, 250);
  //Cheeks
  fill(0, 255, 0);

  arc(250, 270, 115, 80, 0, PI);
  arc(150, 270, 115, 80, 0, PI);
  circle(90, 250, 55);
  circle(310, 250, 55);

  //Chin
  fill(0, 255, 0);
  arc(200, 300, 95, 70, 0, PI);
  //LeftEye
  fill(255, 255, 255);
  arc(140, 190, 75, 110, PI, 3.14);
  //Iris
  fill(0);
  arc(150, 190, 55, 100, PI, 3.14);
  fill(255, 255, 255);
  arc(160, 170, 25, 35, PI, 3.14);
  //RightEye
  fill(255, 255, 255);
  arc(260, 190, 75, 110, PI, 3.14);
  //Iris
  fill(0);
  arc(250, 190, 55, 100, PI, 3.14);
  fill(255, 255, 255);
  arc(240, 170, 25, 35, PI, 3.14);
  //Mouth


  fill(215, 0, 0);
  // Created the two arcs below for amouth outline.
  stroke(0);
  arc(200, 270, 115, 45, 0, TWO_PI);
  arc(200, 270, 115, 90, 0, PI);


  noStroke();
  arc(200, 270, 115, 80, 0, PI);
  //TopMouth
  arc(200, 270, 115, 40, 0, TWO_PI);
  fill(255);
  triangle(210, 248, 223, 280, 240, 253);
  triangle(190, 248, 177, 280, 160, 253);
  //Tounge
  stroke(0);
  fill(255, 0, 0);
  arc(200, 295, 85, 40, 0, TWO_PI);
  noStroke();
  fill(145, 0, 0);
  arc(215, 300, 45, 20, 0, TWO_PI);
  //MouthLines
  stroke(0);
  noFill();
  arc(269, 265, 25, 20, 0, PI);
  arc(131, 265, 25, 20, 0, PI);





  push();
  //RightFoot
  translate(270, 430);
  rotate(radians(-25));
  stroke(30);
  strokeWeight(5);
  fill(205, 35, 45);
  ellipse(0, 0, 130, 90);
  //Nails
  fill(245);
  ellipse(25, -45, 45, 20);
  ellipse(55, -5, 50, 25);
  ellipse(40, 40, 50, 25);
  //YellowCircle
  stroke(80, 40, 20);
  strokeWeight(4);
  fill(255, 195, 35);
  ellipse(-20, 0, 45, 45);
  pop();
  push();
  //LeftFoot
  translate(130, 430);
  rotate(radians(25));
  stroke(30);
  strokeWeight(5);
  fill(205, 35, 45);
  ellipse(0, 0, 130, 90);
  //Nails
  fill(245);
  ellipse(-25, -45, 45, 20);
  ellipse(-55, -5, 50, 25);
  ellipse(-40, 40, 50, 25);
  //YellowCircle
  stroke(80, 40, 20);
  strokeWeight(4);
  fill(255, 195, 35);
  ellipse(20, 0, 45, 45);
  pop();

}