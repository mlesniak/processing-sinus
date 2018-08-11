function setup() {
  createCanvas(windowWidth, windowHeight);
}

function initFrame() {
  background(0);
  stroke(255);
  textSize(8);
}

function drawMessage(message) {
  for (let x = 0; x < windowWidth; x++) {
    let xPos = x;
    let yPos = windowHeight / 2 + Math.sin((x - frameCount) / 60) * 40;
    // stroke(255);
    // point(xPos, yPos);

    if (x % 10 != 0) {
      continue;
    }

    let index = x / 10;
    if (index > message.length) {
      continue;
    }
    stroke(0);
    fill(255);
    text(message[index], xPos + windowWidth / 2, yPos);
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
