const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);
  //creating the boxes
  box1 = new Box(900,100,70,70);
  box2 = new Box(900,100,70,70);


  

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
 
  hero.display();
  rope.display();
  monster.display();
  //displaying the boxes 
  box1.display();

}
function mouseDragged(){
  Matter.body.setPosition(hero.body,{x:mouseX,y:mouseY});
}
