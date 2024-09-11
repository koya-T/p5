let shapes = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < 100; i++) {
        shapes.push(new Shape());
    }
}

function draw() {
    background(0); // 黒の背景
    for (let shape of shapes) {
        shape.update();
        shape.display();
    }
}

class Shape {
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.size = random(20, 50);
        this.color = [random(255), random(255), random(255)];
        this.speedX = random(-2, 2);
        this.speedY = random(-2, 2);
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x > width || this.x < 0) this.speedX *= -1;
        if (this.y > height || this.y < 0) this.speedY *= -1;
    }

    display() {
        fill(this.color);
        noStroke();
        ellipse(this.x, this.y, this.size);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
