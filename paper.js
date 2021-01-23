class Paper
{
    constructor(x,y,radius)
    {
        var option1=
	{    	
		isStatic:false,
		restitution:0.3,
		friction:0.5,
        density:1.5
		
    }
       this.body=Bodies.circle(x,y,radius,option1)
       this.image=loadImage("paper.png")

       World.add(world,this.body);
    }
     
    display()
    {
        var pos =this.body.position;
       
        ellipseMode(RADIUS)
        fill("white")
        ellipse(pos.x,pos.y,20)
        imageMode(CENTER);
        image(this.image,pos.x,pos.y, 50, 70);
    }

}