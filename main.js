function setup() {
  createCanvas(windowWidth, windowHeight);
}

// Drawn on each frame.
function draw() {
  background(0);
  stroke(255);
  for (let x = 0; x < windowWidth; x++) {
    let xPos = x;
    let yPos = windowHeight / 2 + Math.sin((x) / 60) * 40;
    point(xPos, yPos);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
