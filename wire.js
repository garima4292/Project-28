class WIRES{
    constructor(a,b){
        var options = {
            bodyA : a,
            pointB : b,
            stiffness:0.04,
            length:1
        }

        this.b=b;
        this.body = Constraint.create(options);
        World.add(world,this.body);
    }

    attach(body){
        this.body.bodyA = body;
    }

    fly(){
        this.body.bodyA = null;
    }

    

    display(){
        if(this.body.bodyA){
            var posA = this.body.bodyA.position;
            var posB = this.b;
            strokeWeight(4);
            line(posA.x,posA.y,posB.x,posB.y);
        }
        
    }
}