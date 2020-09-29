const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var slingShot;

function preload(){
  polygonimg=loadImage("polygon1.png")
}

function setup() {
  createCanvas(800, 400);
  engine = Engine.create();
  world = engine.world;
  ground1 = new Ground(400, 390, 800, 10)

  stand = new Ground(400, 250, 400, 10)

  block8 = new Block(325, 240, 30, 40);
  block9 = new Block(360, 240, 30, 40);
  block10 = new Block(390, 240, 30, 40);
  block11 = new Block(420, 240, 30, 40);
  block12 = new Block(455, 240, 30, 40);
  //level three
  block13 = new Block(360, 195, 30, 40);
  block14 = new Block(390, 195, 30, 40);
  block15 = new Block(420, 195, 30, 40);
  //top
  block16 = new Block(390, 150, 30, 40)

// polygon1=new Polygon(200,50)
var options = {
  'restitution':0.8,
  'friction':0.8,
  'density':2.0
}
  polygon = Bodies.rectangle(50, 200, 20,20,options)
  console.log(options)
  World.add(world, polygon)
  
  slingShot = new SlingShot(polygon, { x: 100, y: 100 })


}

function draw() {

  background(255, 255, 255);
  Engine.update(engine)
  ground1.display()
  stand.display()
  slingShot.display()
  
  block8.display()
  block9.display()
  block10.display()
  block11.display()
  block12.display()
  block13.display()
  block14.display()
  block15.display()
  block16.display()

  
  imageMode(CENTER)
  image(polygonimg,polygon.position.x,polygon.position.y,40,40)


}

function mouseDragged() {

  Matter.Body.setPosition(polygon, { x: mouseX, y: mouseY });


}
function mouseReleased() {
  slingShot.fly();

}


function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(polygon);
  }
}