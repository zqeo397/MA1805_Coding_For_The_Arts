const names = ["Jack", "Jill", "John", "Jane", "James", "Jenny", "Joe", "Jasmine", "Jacob", "Julia"];
const ages = [25, 30, 35, 40, 45, 50, 55, 60, 65, 70];
const countries = ["USA", "Canada", "UK", "Australia", "Germany", "France", "Italy", "Spain", "Japan", "China"];

let currentName = "";
let currentAge = 0;
let currentCountry = "";

function setup() {
  createCanvas(400, 400);
  textSize(16);
}

function draw() {
  background(220);
  text("Click to generate a random identity", 10, 20);

  if (currentName !== "") {
    text("Name: " + currentName + ", Age: " + currentAge + ", Country: " + currentCountry, 10, 50);
  }
}

function mousePressed() {
  let randomIndex = floor(random(names.length));

  currentName = names[randomIndex];
  currentAge = ages[randomIndex];
  currentCountry = countries[randomIndex];
}