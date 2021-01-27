var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(800, 250, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(100, 300,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  //movingRect.velocityX = 5;
  //fixedRect.velocityX = -5;
}

function draw() {
  background(0,0,0);  
  movingRect.x=mouseX
  movingRect.y=mouseY

  if(isTouching(fixedRect,movingRect)){
    fixedRect.shapeColor="red"
    movingRect.shapeColor="red"

  }
  else {
    fixedRect.shapeColor="green"
    movingRect.shapeColor="green"

  }

 // bounceOff(fixedRect,movingRect)
  drawSprites();
}
