
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 350);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bobObject1 = new Bob(300, 250, 50);
	bobObject2 = new Bob(350, 250, 50);
	bobObject3 = new Bob(400, 250, 50);
	bobObject4 = new Bob(450, 250, 50);
	bobObject5 = new Bob(500, 250, 50);

	roof = new Roof(400, 50, 300, 50);

	ropeBob1 = new Rope(bobObject1.body, roof.body, -100, 0);
	ropeBob2 = new Rope(bobObject2.body, roof.body, -50, 0);
	ropeBob3 = new Rope(bobObject3.body, roof.body, 0, 0);
	ropeBob4 = new Rope(bobObject4.body, roof.body, 50, 0);
	ropeBob5 = new Rope(bobObject5.body, roof.body, 100, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(185,185,185);

  roof.display();

  ropeBob1.display();
  ropeBob2.display();
  ropeBob3.display();
  ropeBob4.display();
  ropeBob5.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
	
  drawSprites();
}

function keyPressed() {
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x: -150, y: -150})
	}
}

