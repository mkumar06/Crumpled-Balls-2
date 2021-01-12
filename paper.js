class Paper {
    constructor(x, y){
    var options={
        isStatic: false,
        restitution: 0.18,
        friction: 0.5,
        density: 1.2
    }
    this.body = Bodies.circle(x, y, 15, options);
    this.radius = 15;
    this.image = loadImage("paper.png");
    World.add (world, this.body);
}
    display() {
        imageMode(CENTER);
        image(this.image,this.body.position.x, this.body.position.y, this.radius + 20, this.radius + 20);
    }
}