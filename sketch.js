
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree1,boy1,ground1,stone1,wire1;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7;

function preload()
{
	boyimage = loadImage("Plucking mangoes/boy.png");
	treeimage = loadImage("Plucking mangoes/tree.png");
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//tree1 = new TREE(800,420);
	ground1 = new GROUND(600,680,1200,40);
	stone1 = new STONE(170,600);

	mango1 = new MANGO(700,350);
	mango2 = new MANGO(750,300);
	mango3 = new MANGO(700,350);
	mango4 = new MANGO(670,250);
	mango5 = new MANGO(850,180);
	mango6 = new MANGO(900,240);
	mango7 = new MANGO(950,270);
	mango8 = new MANGO(850,320);

	wire1 = new WIRES(stone1.body,{x:150,y:570});
	
  
}


function draw() {
  background("skyblue");
  Engine.update(engine);

  //tree1.display();

  imageMode(CENTER);
  image(boyimage,200,620,150,200);
  image(treeimage,800,420,600,600);

  
  CC(mango1,stone1);
  CC(mango2,stone1);
  CC(mango3,stone1);
  CC(mango4,stone1);
  CC(mango5,stone1);
  CC(mango6,stone1);
  CC(mango7,stone1);
  CC(mango8,stone1);
  

  ground1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();

  stone1.display();
  wire1.display();

  

  
}

function mouseDragged(){
	Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
	wire1.fly();
}


function CC(a,b){
if(a.body.position.x-b.body.position.x<a.width/2+b.width/2 &&
	b.body.position.x-a.body.position.x<a.width/2+b.width/2 && 
	a.body.position.y-b.body.position.y<a.height/2+b.height/2 &&
	b.body.position.y-a.body.position.y<a.height/2+b.height/2){
	Body.setStatic(a.body,false);
}
}

function keyPressed(){
	if(keyCode === 32){
		Body.setPosition(stone1.body,{x:150,y:570});
		wire1.attach(stone1.body);
	}
}