const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var platform;
var bird, slingShot;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(700, 305, 250, 10);

    box1 = new Box(585,280,70,20);
    box2 = new Box(665,280,70,20);
    box3 = new Box(745,280,70,20);
    box4 = new Box(615,250,70,20);
    box5 = new Box(705,250,70,20);
    
    

    hexagon = new Hexagon(200,50);

    slingshot = new SlingShot(hexagon.body,{x:190, y:50});
}

function draw(){
    background("white")
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    box3.display();
    box4.display();
    box5.display();

	hexagon.display();
	
    platform.display();
	
	slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(hexagon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
