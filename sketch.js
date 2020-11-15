let ps;

function setup() {

  createCanvas(640, 360);
  background(0);

  ps = new ParticleSystem(createVector(width / 2, 360));
}

function draw() {
  ps.addParticle();
  ps.run();
  fill(60);

}
