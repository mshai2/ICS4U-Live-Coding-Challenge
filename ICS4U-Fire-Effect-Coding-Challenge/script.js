particles = []; //Creates an empty array

function setup() {
  createCanvas(600, 400);//Makes the canvas and its size
}

function draw() {
  background(0);//Sets background to black
  
  for (let i = 0; i < 5; i++) {
    //console.log(particles.length);
    let p = new Particle(); //Making a new particle with the properties of the Particle object
    particles.push(p); //Adds particles to the end or the array then returns its new length
    //console.log(particles.length)
  }
  for (let i = particles.length - 1; i >= 0; i--) //This loop continues for as long as there is something in the particle array, which would be forever
  {
    particles[i].update();//Updates 
    particles[i].show(); //Displays the particles
    if (particles[i].finished()) //If the particle are completely faded
    {
      particles.splice(i, 1); //Get rid of the faded one
    }
  }
}

class Particle 
{ //Makes a new object
  constructor()  //Gives the object properties
  {
    this.x = random(260, 340); 
    this.y = canvas.height;
    this.vx = random(-1, 1); //Makes the particles move in a random direction left or right
    this.vy = random(-5, -1); //Makes the particles move up at a random speed 
    this.fade = 255; //Determines the starting point for the fadin
    this.radius = 16; //Starting radius for the fire particle effects
  }

  finished() //Checks if the fire particle effect has fully faded
  {
    return this.fade < 0; 
  }

  update() { //Constantly updates the particles, making them have velocities, fade and changing their radii
    this.x += this.vx;
    this.y += this.vy;
    this.fade -= 3;
    this.radius -= random(0.05, 0.1);
  }

  show() { //Displays the particles
    noStroke();
    fill(random(200,230), random(50, 150), 10, this.fade);
    ellipse(this.x, this.y, this.radius);
  }
}