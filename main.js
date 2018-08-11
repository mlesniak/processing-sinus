function setup() {
  createCanvas(windowWidth, windowHeight);
}

function initFrame() {
  background(0);
  stroke(255);
  textSize(16);
}

function drawMessage(message) {
  for (let x = 0; x < windowWidth; x++) {
    let xPos = x;
    let yPos = windowHeight / 2 + Math.sin((x) / 60) * 40;
    // For debugging.
    // stroke(255);
    // point(xPos, yPos);

    let p = frameCount % windowWidth;
    let distance = 16;
    if (xPos < p) {
      continue;
    }

    let index = (xPos - p) / distance;
    if (index > message.length) {
      continue;
    }
    stroke(0);
    fill(255);
    text(message[index], xPos, yPos);
  }
}

// Drawn on each frame.
function draw() {
  initFrame();
  drawMessage("Hello, world!");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
