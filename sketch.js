let drops = [];

function setup() {
  createCanvas(windowWidth, windowHeight).position(0, 0).style('z-index', '-1');
  for (let i = 0; i < 250; i++) { // Reducido el número de gotas
    drops[i] = new Drop();
  }
}

function draw() {
  background(240);
  for (let i = 0; i < drops.length; i++) {
    drops[i].fall();
    drops[i].show();
    drops[i].repel(mouseX, mouseY);
  }
}

class Drop {
  constructor() {
    this.x = random(width);
    this.y = random(-200, -100); // Asignación en el constructor
    this.speed = random(1, 30);
    this.len = random(10, 20);
  }

  fall() {
    this.y += this.speed;
    if (this.y > height) {
      this.y = random(-200, -100);
      this.x = random(width);
    }
  }

  show() {
    stroke(20, 43, 226);
    line(this.x, this.y, this.x, this.y + this.len);
  }

  repel(targetX, targetY) {
    let d = dist(this.x, this.y, targetX, targetY);
    if (d < 250) {
      let angle = atan2(this.y - targetY, this.x - targetX);
      let repelForce = 5; // Valor de repulsión
      this.x += cos(angle) * repelForce; // Usar valores precalculados
      this.y += sin(angle) * repelForce; // Usar valores precalculados
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
