particles = []; //Creates an empty array

function setup() {
  createCanvas(600, 400); //Makes the canvas and its size
}

function draw() {
  background(0); //Sets background to black
  if (mouseIsPressed) { //If the mouse is pressed, then the amount of particles on screen will be limited by this number
    x = 5
  } else { //Otherwise there will be no new particles made
    x = 0
  }
  for (let i = 0; i < x; i++) { //Determines the amount of particles on screen
    let p = new Particle(); //Creates an object from the constructor Particle
    particles.push(p); //Adds particles to the end or the array then returns its new length
  }
  //This loop continues for as long as there is something in the particle array, which would be forever
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update(); //Updates array
    if (particles[i].touched === true) {
    particles[i].show(random(80, 50), random(80, 50), 235);
    } else {
      particles[i].show(random(200,230), random(50, 150), 10); //Displays the particles
    }
    if (particles[i].finished()) {
      particles.splice(i, 1);
    } else if (particles[i].boundaryY()) {
      particles[i].vy = -(particles[i].vy)
      particles[i].touched = true;
    }
  }
}

class Particle 
{ //Makes a new object
  constructor()  //Gives the object properties
  {
    this.x = mouseX; 
    this.y = mouseY;
    this.vx = random(-1, 1); //Makes the particles move in a random direction left or right
    this.vy = random(-5, -1); //Makes the particles move up at a random speed 
    this.fade = 255; //Determines the starting point for the fadin
    this.radius = 16; //Starting radius for the fire particle effects
  }

  finished() //Checks if the fire particle effect has fully faded
  {
    return this.fade < 0; 
  }
  
  touched() { //Checks if the particles have at one point touched the border in the Y plane (needed for the colour change)
    return this.y < 0 || this.y > canvas.height;
  }
  
  update() { //Constantly updates the particles, making them have velocities, fade and changing their radii
    /*if (mouseIsPressed) {*/
    this.x += this.vx;
    this.y += this.vy;
    this.fade -= 3;
    this.radius -= random(0.05, 0.1);
    //} else {
      //this.x = canvas.width + 1000;
    //}
  }
  boundaryY() { //Checks to see if the particles have touched the border in the Y plane
    return this.y < 0 || this.y > canvas.height;
  }

  show(a, b, c) { //Displays the particles and takes in 3 parameters that change the colour
    noStroke();
    fill(a, b, c, this.fade);
    ellipse(this.x, this.y, this.radius);
  }
}