class Ball{
    constructor(x,y,r){              
        var option=  {                         
    
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:0.2
            
        }
        
    this.x=x;
    this.y=y;
    this.r=r;
    this.body=Bodies.circle(x,y,r,option);
    World.add(world,this.body);
    
    }
    display(){                                          

var Balls=this.body.position;
push();
translate(Balls.x,Balls.y);
ellipseMode(RADIUS);
strokeWeight(3);
stroke("lightblue");
fill("blue");
ellipse(0,0,this.r,this.r);
pop(); 
}
}