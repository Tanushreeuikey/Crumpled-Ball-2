
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3,ground,ball,paper;

function preload()
{

}

function setup()
 {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	 
	groundSprite=createSprite(width/2, height-50, width,10);
	groundSprite.shapeColor=color("yellow")

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);

	 
	 box1=new Dustbin(540,560,20,170);
	 box2=new Dustbin(660,560,20,170);
	 box3=new Dustbin(600,640,120,20);

	 ball=new Paper(100,400,20)
	 Engine.run(engine);
  
}


function draw() 
{
background("white")
Engine.update(engine);
rectMode(CENTER);

ball.display()

box1.display()
box2.display()
box3.display()


   
  drawSprites();
 
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(ball.body,ball.body.position,{x:78,y:-85})

	}
}

