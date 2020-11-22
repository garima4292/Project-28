class TREE{
	constructor(x,y)
	{
		var options={
			isStatic:true
			}
        this.body=Bodies.rectangle(x, y, 600,600, options);
        this.width=600;
        this.height=600;
        this.image=loadImage("Plucking mangoes/tree.png");
       
		World.add(world, this.body);

	}
	display()
	{	
        var pos=this.body.position;
		push();
		translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
			
	}
}