var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,groundSprite, box4, box44
var people1, people2, zombie1, zombie2
var random1, random2
var w, x, y, z
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	  packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-50, width,10);
	groundSprite.shapeColor=color(255)



	engine = Engine.create();
	world = engine.world;

	var package_options ={
		restitution:0.0,
		isStatic: true
	}
	packageBody = Bodies.circle(width/2 , 200 , 5 , package_options);
	World.add(world, packageBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);


	Engine.run(engine);

	box1 = new Box(290,600,20,100);
box2 = new Box(510,600,20,100);
box3 = new Box(400,640,200,20);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 


  

  random1 = random(1,10);
  random2 = random(-10,-1);
  w= Math.round(random(0,250))
  x= Math.round(random(0,100))
  y= Math.round(random(0,100))
  z= Math.round(random(0,250))
  
  if(x === 1){
people1 = createSprite(0,650,20,20);
people1.velocityX = random1;
people1.shapeColor = color("green");
}

if(y===1){
people2 = createSprite(800,650,20,20);
people2.velocityX = random2;
people2.shapeColor = color("green");
}

if(w===1) {
	zombie1 = createSprite(0,640,40,40);
	zombie1.velocityX = 4;
	zombie1.shapeColor = color("red");
}

if(z===1) {
	zombie2 = createSprite(800,640,40,40);
	zombie2.velocityX = -4;
	zombie2.shapeColor = color("red");
}

box1.display();
box2.display();
box3.display();
  drawSprites();
  keyPressed();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
Matter.Body.setStatic(packageBody,false)

helicopterSprite.x = mouseX;
helicopterSprite.y = mouseY;
	//if(packageSprite.isTouching(helicopterSprite)){
	//	Matter.Body.setSatic(packageBody,true)
	//}
 }
}



