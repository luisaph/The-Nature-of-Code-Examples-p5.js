// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var angle = 0;
var aVelocity = 0;
var aAcceleration = 0.0001;

function setup() {
  createGraphics(640,360);
}

function draw() {
  background(220);

  fill(127);
  stroke(0);

  translate(width/2, height/2);
  rectMode(CENTER);
  rotate(angle);
  stroke(0);
  strokeWeight(2);
  fill(127);
  line(-60, 0, 60, 0);
  ellipse(60, 0, 16, 16);
  ellipse(-60, 0, 16, 16);

  angle += aVelocity;
  aVelocity += aAcceleration;

};