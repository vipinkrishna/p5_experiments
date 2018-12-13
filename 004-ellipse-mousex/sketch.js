var bgColorRandom;
var ran1, ran2, ran3;

function setup() {
  createCanvas(400, 400);
  bgColorRandom = random(255);
  ran1 = random(255);
  ran2 = random(255);
  ran3 = random(255);
}


function draw() {
  background(bgColorRandom);
  if (mouseIsPressed) {
    fill(ran1, ran2, ran3);
    stroke(ran1, ran2, ran3);
  } else {
    fill(ran1, 0, 0);
    stroke(ran1, 0, 0);
  }
  ellipse(mouseX, mouseY, 40, 40);
}