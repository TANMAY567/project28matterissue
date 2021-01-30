class Ellastic{
    constructor(body, anchor){
        var options = {
            bodyA: body,
            pointB: anchor,
            stiffness: 0.004,
            length: 1
        }
        this.bodyA=body;
        this.bodyB = anchor;
        this.ellastic = Constraint.create(options);
        World.add(world, this.cons);
    }
    fly(){
       this.ellastic.bodyA = null;
    }

    attach(body){
        this.ellastic.bodyA=body;
    }

    display(){
            
          if(this.ellastic.bodyA){

            var pointA = this.ellastic.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            
        }
    
    }
}