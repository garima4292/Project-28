class STONE{
	constructor(x,y)
	{
		var options={
			isStatic:false,
			restitution:0,
			friction:2,
			density:2
			
			}
        this.body=Bodies.rectangle(x, y, 50,50, options);
        this.width=50;
        this.height=50;
        this.image=loadImage("Plucking mangoes/stone.png");
       
		World.add(world, this.body);
    }
    
	display()
	{		
        var pos=this.body.position;
        //pos.x = mouseX;
        //pos.y = mouseY;
        push();
        translate(pos.x,pos.y)
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
			
	}
}