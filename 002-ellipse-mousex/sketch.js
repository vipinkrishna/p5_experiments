function setup() {
  createCanvas(400,400);
}

function draw() {
  background(220);
  if (mouseIsPressed) {
    fill('red');
    stroke('red');
    ellipse(mouseX,mouseY,60,60);
  } else {
    fill(255);
    stroke(255);
    ellipse(mouseX,mouseY,40,40);
  }
}