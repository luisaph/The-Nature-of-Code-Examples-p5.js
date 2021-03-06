// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var angle = 0;
var angleVel = 0.1;

function setup() {
  createGraphics(640,360);
  background(255);
  stroke(0);
  strokeWeight(2);
  noFill();

  beginShape();
  for (x = 0; x <= width; x += 5) {
    var y = map(sin(angle),-1,1,0,height);
    vertex(x,y);
    angle += angleVel;
  }
  endShape();
}