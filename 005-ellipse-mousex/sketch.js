// https://github.com/vipinkrishna

var bgColorRandom;
var ran1, ran2, ran3;

var img;

function preload() {
  img = loadImage('image.png');
}

function setup() {
  ran1 = random(255);
  ran2 = random(255);
  ran3 = random(255);
  bgColorRandom = random(255);
  createCanvas(400, 400);
  background(bgColorRandom);
  image(img, 10, 10);
}

function draw() {
  if (mouseIsPressed) {
    fill(ran1, ran2, ran3);
    stroke(ran1, ran2, ran3);
    ellipse(mouseX, mouseY, 40, 40);
  }
}