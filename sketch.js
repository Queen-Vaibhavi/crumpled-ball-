const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,panna;	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	panna = new Prishth(240,400,30);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
 groundObject.display();
  dustbinObj.display();
  panna.display();
 
}//function draw bracket

function keyPressed(){
	if(keyCode === UP_ARROW){
    Matter.Body.applyForce(panna.body,panna.body.position,{x:200, y:300});
	}
	
}//keyPressed bracket