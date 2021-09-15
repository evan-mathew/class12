var garden,gardenImg;
var rabbit,rabbitImg;
var apple, appleImg;
var leaf,leafImg;
var redleaf,redleafImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
  leafImg = loadImage("leaf.png")
  redleafImg = loadImage("orangeLeaf.png")
}

function setup(){
  
  createCanvas(400,400);

garden=createSprite(200,200);
garden.addImage(gardenImg);

rabbit = createSprite(50,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

rabbit.x = World.mouseX

function createApples(){
apple = createSprite(random(350,50),40, 10, 10)
apple.addImage(appleImg);
apple.scale = 0.05
apple.velocityY = 2
apple.lifetime = 150
}

function createLeaves(){
  leaf = createSprite(random(350,50),40, 10, 10)
  leaf.addImage(leafImg);
  leaf.scale = 0.05
  leaf.velocityY = 2
  leaf.lifetime = 150
}

function createredLeaves(){
  redleaf = createSprite(random(350,50),40, 10, 10)
  redleaf.addImage(redleafImg);
  redleaf.scale = 0.05
  redleaf.velocityY = 2
  redleaf.lifetime = 150
}
  var select_sprite = Math.round(random(1,2));
  
  if (frameCount % 80 == 0){
    if(select_sprite == 1){
     createApples()
    }
    else { 
      if(select_sprite == 2){
     createLeaves()
      }
     else{
       createredLeaves()
     }
    }
  }

function draw() {
  background(0);

  edges = createEdgeSprites();
  rabbit.collide(edges);

  createApples()
  createLeaves()
  createredLeaves()


rabbit.x = World.mouseX


  drawSprites();
}
