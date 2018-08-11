function setup() {
  createCanvas(windowWidth, windowHeight);
}

// Drawn on each frame.
function draw() {
  background(0);
  stroke(255);
  for (let x = 0; x < windowWidth; x++) {
    point(x, windowHeight / 2 + Math.sin((x - frameCount) / 60) * 40);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
