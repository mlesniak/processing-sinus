function setup() {
  createCanvas(windowWidth, windowHeight);
}

function initFrame() {
  background(0);
  stroke(255);
  textSize(16);
}

function drawMessage(message) {
  stroke(0);
  fill(255);
  let speed = 2.0;
  let distance = 16;
  let k = 240 / (2 * Math.PI);

  for (let i = 0; i < message.length; i++) {
    let p = (frameCount * speed) % windowWidth;
    let xPos = p + i * distance;
    let yPos = windowHeight / 2 + Math.sin((xPos) / k) * 40;
    text(message[i], xPos % windowWidth, yPos);
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
