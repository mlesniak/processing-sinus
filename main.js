function setup() {
  createCanvas(windowWidth, windowHeight);
}

function initFrame() {
  background(0);
  stroke(255);
  textSize(16);
}

function drawMessage(message, sinWidth, sinHeight, speed,
    red = 255, green = 255, blue = 255) {
  stroke(0);
  fill(red, green, blue);
  let distance = 16;
  let k = sinWidth / (2 * Math.PI);

  for (let i = 0; i < message.length; i++) {
    let p = (frameCount * speed) % windowWidth;
    let xPos = p + i * distance;
    let yPos = windowHeight / 2 + Math.sin((xPos) / k) * sinHeight;
    text(message[i], xPos % windowWidth, yPos);
  }
}

// Drawn on each frame.
function draw() {
  initFrame();
  drawMessage("Hello, world!", 240, 40, 2.0, 255, 0, 0);
  drawMessage("JavaScript is fun", 240, 20, 1.5, 0, 255, 0);
  drawMessage("Processing", 120, 60, 1.0, 0, 0, 255);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
