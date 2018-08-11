function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

// Drawn on each frame.
function draw() {
  fill(255);
  rect(10, 10, 10, 10);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
