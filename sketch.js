
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var backgroundImg;
var car1;

function preload(){
  backgroundImg = loadImage('assets/bg.gif');
}


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
 
  engine = Engine.create();
  world = engine.world;

  car1 = new Car(350,450,150,150);



  
  
}


function draw() 
{
  background(51);
  image(backgroundImg, 0, 0, width, height);

  Engine.update(engine);

  car1.display();
  
}

