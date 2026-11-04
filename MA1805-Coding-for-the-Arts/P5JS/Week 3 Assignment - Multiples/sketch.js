
//Created a list of names, ages annd countries that are randomly selected.

const names = ["Jack", "Jill", "John", "Jane", "James", "Jenny", "Joe", "Jasmine", "Jacob", "Julia"];
const ages = [25, 30, 35, 40, 45, 50, 55, 60, 65, 70];
const countries = ["USA", "Canada", "UK", "Australia", "Germany", "France", "Italy", "Spain", "Japan", "China"];
// The variables was made, as these are used to actually store the identiy created, that way it can be written as text
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
  // currentName !== is checking if the variable is empty, if it's not empty it will continue and display the text in the format seen below.
  if (currentName !== "") {
    text("Name: " + currentName + ", Age: " + currentAge + ", Country: " + currentCountry, 10, 50);
  }
}
// This little block of code does all of the magic, as it randomly selects a name, age and country. 
// And stores in the variables above.
function mousePressed() {
  let randomIndex = floor(random(names.length));

  currentName = names[randomIndex];
  currentAge = ages[randomIndex];
  currentCountry = countries[randomIndex];
}