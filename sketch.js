var towerImg, balcony, balcony1;

function preload() {
  towerImg = loadImage("images/tower.png");
  balcony = loadImage("images/door.png");
  balcony1 = loadImage("images/climber.png");
}

function setup() {
  createCanvas(800,800);
  tower = createSprite(380, 200, 800, 800);
  tower.addImage(towerImg);
  tower.velocityY = 5
}

function draw() {
  background(255,255,255);
  
  if(tower.y>600){
    tower.y = 400
  }

  drawSprites();
  spawnPlatforms();
}

function spawnPlatforms(){
  if(frameCount % 120 === 0){
  bal = createSprite(400, 200, 50, 50);
  bal.addImage(balcony);

  bal1 = createSprite(400, 250, 30, 50);
  bal1.addImage(balcony1); 
  }
}