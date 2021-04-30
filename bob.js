class bob {
    constructor(x,y,radius){

        var options = {
            'isStatic': false,
            'restitution': 0.3,
            
            'density':1.2
        }

        this.body =  Matter.Bodies.circle(x,y,20,options);
        this.radius = radius;
        
        

        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        
        fill("pink");
        ellipse(0,0,this.radius);
        pop();
        
    }
}