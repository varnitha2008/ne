
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball1, ball2,ball3,ball4,ball5;
var ropes1,ropes2,ropes3,ropes4,ropes5;


function preload(){            
}

function setup() {
	createCanvas(900, 800);


	engine = Engine.create();
	world = engine.world;

	

	Engine.run(engine);

	roofobj = new Roof(450,100,700,50);
	

	ball1 = new Ball(240,600,50);
    ball2 = new Ball(340,600,50);
	ball3 = new Ball(440,600,50);
	ball4 = new Ball(540,600,50);
	ball5 = new Ball(640,600,50);
	 
	//rope1 = new Rope(ball1.body,roof.body,-100)
	//rope2 = new Rope(ball2.body,roof.body,-50)
	//rope3 = new Rope(ball3.body,roof.body,0)
	//rope4 = new Rope(ball4.body,roof.body,50)
	//rope5 = new Rope(ball5.body,roof.body,100)
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  Engine.update(engine);
  
        roofobj.display();
		ball1.display();
		ball2.display();
		ball3.display();
		ball4.display();
		ball5.display();

		
		rope1.display();
		//rope2.display();
		//rope3.display();
		//rope4.display();
		//rope5.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === DOWN_ARROW){
		//applyForce - refer the crumpled paper 
		// appyForce only for ball1.body
	}
}



