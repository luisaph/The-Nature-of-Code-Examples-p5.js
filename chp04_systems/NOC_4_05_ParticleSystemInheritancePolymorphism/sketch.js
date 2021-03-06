// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Particles are generated each cycle through draw(),
// fall with gravity and fade out over time
// A ParticleSystem object manages a variable size 
// list of particles.


var particleSystem;

function setup() {
  createGraphics(640,360);
  particleSystem = new ParticleSystem(new PVector(width/2, 50));
}

function draw() {
  background(255);  
  particleSystem.addParticle();
  particleSystem.run();
}

