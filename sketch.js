function setup() {
  createCanvas(800,400);
  mr = createSprite(400, 200, 70, 50);
  mr.shapeColor = "blue"
  mr.debug = true;

  fr = createSprite(200,200,50,70);
  fr.shapeColor = "blue"
  fr.debug  = true;
}

function draw() {
  background("black");
  mr.x = World.mouseX
  mr.y = World.mouseY
  if (mr.x - fr.x <= mr.width/2 + fr.width/2
    && fr.x - mr.x <= mr.width/2 + fr.width/2
    && mr.y - fr.y <= mr.height/2 + fr.height/2
    &&fr.y - mr.y <= mr.height/2 + fr.height/2){ 
  mr.shapeColor = "green"
  fr.shapeColor = "green"

  }
  else {
mr.shapeColor = "blue"
fr.shapeColor = "blue"
  
  }  
  drawSprites();
}