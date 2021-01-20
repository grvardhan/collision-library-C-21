var fixedRect, movingRect;
var a, b;
var c,d;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  a = createSprite(100, 400, 50, 80);
  a.shapeColor = "orange";
  a.debug = true;

  b = createSprite(200,300,50,80);
  b.shapeColor = "orange";
  b.debug = true;

  c = createSprite(300,200,50,80);
  c.shapeColor="blue";
  c.debug=true;
  
  d = createSprite(400,500,50,80);
  d.shapeColor = "blue";
  d.debug = true;

  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  console.log(movingRect.x - fixedRect.x)
  console.log(fixedRect.width/2 + movingRect.width/2)

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

  if(isTouching(movingRect, a)){
    movingRect.shapeColor = "red";
    a.shapeColor = "red";
  }else{
    movingRect.shapeColor = "green";
    a.shapeColor = "orange";
  }
  if(isTouching(movingRect, b)){
    movingRect.shapeColor = "red";
    b.shapeColor = "red";
  }else{
    movingRect.shapeColor = "green";
    b.shapeColor = "orange";
  }
  if(isTouching(movingRect,c)){
    movingRect.shapeColor="red";
    c.shapeColor = "red";
  }else{
    movingRect.shapeColor="yellow";
    c.shapeColor = "blue";
  }
  if(isTouching(movingRect, d)){
    movingRect.shapeColor = "red";
    d.shapeColor = "red";
  }else{
    movingRect.shapeColor = "green";
    d.shapeColor = "blue";
  }
 
  drawSprites();
}

function isTouching(object1,object2){
  if (object1.x - object2.x <= object2.width/2 + object1.width/2
    && object2.x - object1.x <= object2.width/2 + object1.width/2
    && object1.y - object2.y <= object2.height/2 +object1.height/2
    && object2.y - object1.y <= object2.height/2 + object1.height/2) {
 return true;
}
else {
  return false;
}
}