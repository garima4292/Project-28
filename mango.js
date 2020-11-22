class MANGO{
	constructor(x,y)
	{
		var options={
			isStatic:true,
			restitution:0,
      friction:2
      
        }
        
        this.body=Bodies.rectangle(x, y, 50,50, options);
        this.width=50;
        this.height=50;
        this.image=loadImage("Plucking mangoes/mango.png");
       
		World.add(world, this.body);
    }
    
	display()
	{		
        var pos=this.body.position;
        push();
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
        pop();
			
	}
}