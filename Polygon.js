
      class Polygon{
        constructor(x,y,width,height,){
            var options = {
                isStatic : false,
                restitution : 0,
                friction : 1,
                density : 20.2
            
                
            }
            
            this.body = Matter.Bodies.circle(x,y,15,options);
            this.width = width;
            this.height = height;
            World.add(world, this.body);
           
        }
        display(){
            rectMode(CENTER);
            fill("yellow");
             ellipse(this.body.position.x,this.body.position.y,this.width,this.height);
    }
    }