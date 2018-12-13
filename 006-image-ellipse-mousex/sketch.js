// https://github.com/vipinkrishna

var bgColorRandom;
var ran1, ran2, ran3;

var img;

function setup() {
  ran1 = random(255);
  ran2 = random(255);
  ran3 = random(255);
  bgColorRandom = random(255);  //random()

  createCanvas(400, 400);
  background(bgColorRandom);  //background()
  loadImage('image.png', drawImageCallback);  //loadImage() with Cb
}

function drawImageCallback(img) {
  image(img,10, 10);  //image()
}

function draw() {
  if (mouseIsPressed) {
    fill(ran1, ran2, ran3);  //fill()
    stroke(ran1, ran2, ran3);  //stroke()
    ellipse(mouseX, mouseY, 40, 40);  //ellipse()
  }
}