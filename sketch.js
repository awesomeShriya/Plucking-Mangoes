
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy,boyImg;

function preload()
{
boyImg=loadImage("boy.png");	
}

function setup() {
	createCanvas(1200, 700);

  boy=createSprite(350,600,70,70);
  boy.addImage(boyImg);
  boy.scale=0.15;
  

	engine = Engine.create();
	world = engine.world;
  tree = new Tree(900,400,500,600);
  stone = new Stone(235,450,50,50);
	//Create the Bodies Here.
mango1 = new Mango(900,250,50,50);
mango2 = new Mango(750,300,50,50);
mango3 = new Mango(700,350,50,50);
mango4 = new Mango(800,300,50,50);
mango5 = new Mango(850,250,50,50);
ground = new Ground(600,height,1200,20);

slingshot = new Slingshot(stone.body,{x:235,y:450});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180);
  tree.display();
  stone.display();
  //slingshot.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  ground.display();
  


  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  
  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:235,y:420});
		slingshot.attach(stone.body);
	}
}
function detectCollision(stone,mango){
  mangoPosition=mango.body.position
  stonePosition=stone.body.position

  var distance=dist(stonePosition.x,stonePosition.y,mangoPosition.x,mangoPosition.y)
  if (distance<=mango.r+stone.r){
    Matter.Body.setStatic(mango.body,false);
  }
}

