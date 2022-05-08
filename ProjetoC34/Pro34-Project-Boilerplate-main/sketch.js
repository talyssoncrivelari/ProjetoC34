const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine, world;

let topEdge, bottonEdge, leftEdge, rightEdge;
let guindastePart1, guindastePart2, guindastePart3, guindastePart4, guindastePart5, guindastePart6;
let guindastePart7, guindastePart8, light;
let buildPart1, buildPart2, buildPart3, buildPart4, buildPart5;
let buildPart6, buildPart7, buildPart8, buildPart9, buildPart10;
let buildPart11, buildPart12, buildPart13, buildPart14, buildPart15;
let ironBall, steelRope, ballLink, guindastLink;
let mat;
let leftButton, leftImg, leftCimg, rightButton, rightImg, rightCimg;

function preload() {
  leftImg = loadImage("./assets/LEFT0.png");
  rightImg = loadImage("./assets/RIGHT0.png");
  leftCimg = loadImage("./assets/LEFTCLICKED0.png");
  rightCimg = loadImage("./assets/RIGHTCLICKED0.png");
}

function setup() {

  createCanvas(800, 750);

  engine = Engine.create();
  world = engine.world;

  topEdge = new Edge(400, 750, 800, 1);
  bottonEdge = new Edge(400, 0, 800, 1);
  leftEdge = new Edge(0, 325, 1, 750);
  rightEdge = new Edge(800, 325, 1, 750);

  leftButton = createSprite(25, 25, 50, 50);
  leftButton.addImage(leftImg); 

  rightButton = createSprite(85, 25, 50, 50);
  rightButton.addImage(rightImg);
  //leftButton = createImg("./assets/LEFT0.png");
  //leftButton.position(25, 25);

  //rightButton = createImg("./assets/RIGHT0.png");
  //rightButton.position(85, 25);

  //mat = Bodies.rectangle(175, 218.5, 35, 7);
  mat = new Mat(160, 218.5, 35, 7);

  light = createSprite(650, 88, 25, 25);
  light.shapeColor = "RED";

  guindastePart1 = new Guindast(650, 675, 150, 150);
  guindastePart2 = new Guindast(650, 550, 100, 100);
  guindastePart3 = new Guindast(650, 425, 150, 150);
  guindastePart4 = new Guindast(650, 300, 100, 100);
  guindastePart5 = new Guindast(650, 237, 150, 25);
  guindastePart6 = new Guindast(650, 188, 225, 75);
  guindastePart7 = new Guindast(338, 188, 400, 50);
  guindastePart8 = new Guindast(650, 125, 150, 50);

  buildPart1 = new Build(100, 720, 50, 50);
  buildPart2 = new Build(175, 720, 50, 50);
  buildPart3 = new Build(325, 720, 50, 50);
  buildPart4 = new Build(400, 720, 50, 50);
  buildPart5 = new Build(137, 685, 175, 15);
  buildPart6 = new Build(360, 685, 175, 15);
  buildPart7 = new Build(137, 625, 50, 100);
  buildPart8 = new Build(360, 625, 50, 100);
  buildPart9 = new Build(247, 565, 350, 15);
  buildPart10 = new Build(170, 530, 50, 50);
  buildPart11 = new Build(325, 530, 50, 50);
  buildPart12 = new Build(247, 495, 200, 15);
  buildPart13 = new Build(247, 435, 50, 100);

  steelRope = new Rope(6, {x: mat.x, y: mat.y + 5});
  ironBall = Bodies.circle(125, 250, 30);

  //Matter.Composite.add(steelRope, mat);
  //guindastLink = new Link(steelRope.body, mat);
  Matter.Composite.add(steelRope.body, ironBall);
  ballLink = new Link(steelRope, ironBall);

  rectMode(CENTER);
  ellipseMode(RADIUS);

}

function draw() {

  background("DARKBLUE");
  Engine.update(engine);

  topEdge.display();
  bottonEdge.display();
  leftEdge.display();
  rightEdge.display();

  mat.display();
  steelRope.display();
  //ironBall.display();

  push();
  rectMode(CENTER);
  rect(steelRope, this.x, this.y);  
  //rect(mat.position.x, mat.position.y, 35, 7)
  ellipse(ironBall.position.x, ironBall.position.y, 30);
  pop();

  guindastePart1.display();
  guindastePart2.display();
  guindastePart3.display();
  guindastePart4.display();
  guindastePart5.display();
  guindastePart6.display();
  guindastePart7.display();
  guindastePart8.display();

  buildPart1.display();
  buildPart2.display();
  buildPart3.display();
  buildPart4.display();
  buildPart5.display();
  buildPart6.display();
  buildPart7.display();
  buildPart8.display();
  buildPart9.display();
  buildPart10.display();
  buildPart11.display();
  buildPart12.display();
  buildPart13.display();

  if(keyDown("LEFT")) {
    leftButton.addImage(leftCimg);
    //leftButton.createImg("./assets/LEFTCLICKED0.png");
    mat.x = mat.x - 5;
    if(mat.x <= 160) {
      mat.x = 160;
  }
  } else {
    leftButton.addImage(leftImg);
  }

  if(keyDown("RIGHT")) {
    rightButton.addImage(rightCimg);
    //rightButton.createImg("./assets/RIGHTCLICKED0.png");
    mat.x = mat.x + 5;
    if(mat.x >= 500) {
      mat.x = 500;
    }
  } else {
    rightButton.addImage(rightImg);
  }

  drawSprites();

}

function leftMat() {
  mat.x = mat.x - 5;
  if(mat.x <= 160) {
    mat.x = 160;
  }
}

function rightMat() {
  mat.x = mat.x + 5;
  if(mat.x >= 500) {
    mat.x = 500;
  }
}
//Oi fessora, tou entregando agora só para receber os pontos mesmo, mas estou tentando arrumar esses bugs aí
//mt bugado :c n sei conectar a corda na esteira la do guindaste, pode me ajudar?