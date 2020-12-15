var fixrec, movrec;
var car,wall;

function setup() {
  createCanvas(1200,800);
  fixrec = createSprite(600, 400, 50, 80);
  fixrec.shapeColor = "green";
  fixrec.debug = true;

  movrec = createSprite(400,200,80,30);
  movrec.shapeColor = "green";
  movrec.debug = true;

  car=createSprite(200,200,50,50);
  car.velocityX=10;
  wall=createSprite(1000,200,50,100);

}

function draw() {
  background(0,0,0);  
  movrec.x = World.mouseX;
  movrec.y = World.mouseY;

  if (isTouching(movrec,fixrec)){
    fixrec.shapeColor="green";
    movrec.shapeColor="green";
  }else{
  fixrec.shapeColor="blue";
  movrec.shapeColor="blue";
  }
  if (isTouching(car,wall)){
      textSize(20);
      text("touched",600,400);

  }
  //bounceOff(car,wall);
  collide(car,wall);
  drawSprites();
}
