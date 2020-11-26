
class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
        var option = {
            pointA : body1,
            bodyB : roof,
            pointB : {x : offset,y:1}
        
        }
    
        this.ropes = Constraint.create(option);
        this.pointB = point;
        World.add(world,this.rope);
       
       
    }
     

    display(){

        if(this.rope.bodyA){ 
        //var pointA = this.rope.bodyA.position;
        //var pointB = this.pointB;

       //var  pointA = bodyA -position
       //var  pointB = bodyB +position //+ offset for the x value

        strokeWeight(2);
        line(pointA.x,pointB.x,pointB.x+offset,pointB.y);
        }
    }
}

/*class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
        // bodyA : ball
        this.offsetX=this.offsetX
        var opions={
            pointA : body1
         
        }
        // bodyB : roof
        // pointB : {x : offset,y:0}

        //create the constraint
        // Add it to the world
    }

    //display()
    //line() needs to used
    //pointA - bodyA position
    //pointB - bodyB position + offset for the x value

    //line(pointA.x,pointB.x,pointB.x+offset,pointB.y)
}*/