const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var backgroundImg;

var score = 0;

function preload()
{
//backgroundImg = loadImage("img.jpg");
getBackgroundImg();
}

function setup() {
  createCanvas(800,400);
  
	engine = Engine.create();
	world = engine.world;

  ground1 = new Ground(400,390,width,10);
  ground2 = new Ground(400,240,300,10);
 
  box1 = new Box(400,190,40,40);
  box2 = new Box(450,190,40,40);
  box3 = new Box(500,199,40,40);
  box4= new Box(550,199,40,40);
  box5 = new Box(400,200,40,40);
  box6 = new Box(450,200,40,40);
  box7 = new Box(400,199,40,40);
  
  polygon = new Polygon(100,200,30,30);

  slingshot = new SlingShot(polygon.body,{x:100,y:130});

Engine.run(engine);
}

function draw() {
  
if(backgroundImg)
background(backgroundImg);

textSize(35);
fill("black");
text("Score: "+score,550,40);


Engine.update(engine);

 ground1.display(); 
ground2.display();

box1.display();
box1.score();
box2.display();
box2.score();
box3.display();
box3.score()
box4.display();
box4.score();
box5.display();
box5.score();
box6.display();
box6.score();
box7.display();
box7.score();

polygon.display();

slingshot.display();

}



function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode===32){
   slingshot.attach(polygon.body);
  }
  }

async function getBackgroundImg(){
  var response  = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON =  await response.json();
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);

  if(hour>=6 && hour<=19){
bg = "2.jpg";
  }
else{
  bg = "img.jpg";
}
  backgroundImg = loadImage(bg);
}






