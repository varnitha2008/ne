class Roof{
    
    constructor(x,y,width,height) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("blue");
        strokeWeight(9)
        stroke("lightblue");
        rect(pos.x, pos.y, this.width, this.height);
      }
    
    
// create the rectangular body for the roof and make it static
    //add it to the world
     
    //display()
    //rectMode
    //rect()
}