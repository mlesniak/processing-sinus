function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

// Drawn on each frame.
function draw() {
  stroke(255);
  for (let x = 0; x < windowWidth; x++) {
    point(x, 10);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
