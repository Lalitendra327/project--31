class Plinko{
    constructor(x,y){
     var options = {
         isStatic:true,
         restitution:0,
         friction: 1,
         density:1.2
        }
        this.diameter = 20;
        this.x = x;
        this.y = y;
     this.body = Bodies.circle(this.x,this.y,10,options);
     
     World.add(world,this.body);
    
    }

    
     

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        ellipse(0,0,this.diameter,this.diameter);
        pop();

    }
}