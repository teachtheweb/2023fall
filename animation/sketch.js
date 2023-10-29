var angle = 0;

function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  translate(width/2,height/2);
  rotate(angle);
  noStroke();
  fill(254);
  rect(0,0,width/2,height/2);
  drawingContext.filter = 'blur(75px)'
  
  angle += 0.2;
}
