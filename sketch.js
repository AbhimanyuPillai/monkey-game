var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0;
var PLAY =1;
var END = 0;
var gameState = PLAY;

function preload(){
  
  monkey_running =      loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  
 
}



function setup() {
  
  
   createCanvas(600,400)
  
   monkey = createSprite(70,320);
   monkey.addAnimation("running",monkey_running)
   monkey.scale=0.13

   ground = createSprite(300,360,1200,5)
   ground.velocityX= -5
   
   FoodGroup = new Group();
   obstacleGroup = new Group();
  
  
   
 
  
  
}


function draw() {

  background("lightgreen")
 
  if( keyDown("space") && monkey.y > 306)
   {
     monkey.velocityY = -14
    
   }
  
    monkey.velocityY = monkey.velocityY + 0.6
    monkey.collide(ground)
  
    textSize(30)
    fill("red")
    text("Survival Time =" + score,180,50)
  
    if (ground.x < 0)
    {
       ground.x = ground.width/2
    }
    
    if (monkey.isTouching(obstacleGroup)) 
    {
       obstacle.velocityX = 0;
       banana.velocityX = 0;
    }
  
    
  

    spawnObstacles()  
    spawnBanana()  
  
    drawSprites()
}

function spawnObstacles()
{
  if (frameCount % 300===0)
  {
    obstacle = createSprite(600,320)
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2
    obstacle.velocityX = -5
    obstacle.lifetime = 120
    obstacleGroup.add(obstacle);
  }
}

function spawnBanana()
{
if (frameCount % 80 === 0) {
    banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(130,210));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -5;
    banana.lifetime = 120
    FoodGroup.add(banana); 
}
}











































































































































































































































