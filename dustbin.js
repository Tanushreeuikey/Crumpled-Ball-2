class Dustbin
{
    constructor(x,y,width,height)
    {
        var option=  
        {
            restitution: 0,
            isStatic: true
        }
      this.body=Bodies.rectangle(x,y,width,height,option)
      this.image=loadImage("dustbingreen.png")
      World.add(world,this.body);
      this.width=width;
      this.height=height;
    }

    display()
    {
        var pos =this.body.position;
       
        rectMode(CENTER);
        fill("white")
        rect(pos.x,pos.y,this.width,this.height)
        imageMode(CENTER);
        image(this.image,600,550, 160,200);
    }
}