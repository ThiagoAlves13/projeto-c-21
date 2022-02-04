
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	var ball_options = {

		isSTatic:false,
		restituition:0.3,
		friction:0,
		densiy:1.2
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	World = world,ball;
	Engine.run(engine);
  
	groundObj=new ground(width/2,670,width,20);
	leftSide = new ground(1100,600,20,120);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}

function keyPressed(){

	if (keyCode === UP_ARROW)

	Matter.Body.applyForce
}

