class Box {
    constructor(x,y,width,height) {
      var options = {
        friction:2,
        restitution:0.04,
        density:1
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
     this.color = color(random(1,200),random(1,200),random(1,200));
      this.width = width;
      this.height = height;
      this.Visibility = 255;
      World.add(world, this.body);
    }
    display(){


      if(this.body.speed<3){
        var pos =this.body.position;
        rectMode(CENTER);
        fill(this.color);
        rect(pos.x, pos.y, this.width, this.height);
            }
            else{
              World.remove(world,this.body);
              push();
              this.Visibility = this.Visibility-5;
              tint(255,this.Visibility);
             this.body.position.x,this.body.position.y;
              pop();
            }

            }
            score(){
              if(this.Visibility<0 && this.Visibility>-105){
score++;
              }
    }


  };