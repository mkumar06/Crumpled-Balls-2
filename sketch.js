
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinImage;

function preload()
{
	dustbinImage = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	dustbinBottom = new Dustbin(600, height-40, 200, 10);
	dustbinLeft = new Dustbin(500, height-90, 10, 100);
	dustbinRight = new Dustbin(700, height-90, 10, 100);
	ground = new Ground(400, height-25, 800, 25);
	paperBall = new Paper(200, 200);

	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(200);
  
	ground.display();
	dustbinBottom.display();
	dustbinLeft.display();
	dustbinRight.display();
	paperBall.display();

	image(dustbinImage, 600, height-130, 230, 220);

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:30,y:-30});
	}
}



