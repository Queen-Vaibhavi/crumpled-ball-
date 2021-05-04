class Prishth{
    constructor(x,y,ra){
     var options = {
         isStatic: false,
        restitution : 0.8,
        density: 1.2,
        friction : 0.3
     }
     this.body = Bodies.circle(x,y,ra,options);
     World.add(world,this.body);
     this.r = ra;
     this.image = loadImage("paper.png");
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.r*2.8,this.r*2.8);
        pop();
    }    
}