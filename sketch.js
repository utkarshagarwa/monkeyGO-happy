
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

var survival = 0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(400,400) 
  
monkey = createSprite(80,315,20,20) 
monkey.addAnimation('moving',monkey_running)
monkey.scale = 0.1

ground = createSprite(400,350,900,10)
ground.velocityX = -10;
ground.x = ground.width/2;

}


function draw() {
background("yellow")
  
if(ground.x<0){
  ground.x = 400
}
  
 text("Score : " + survival,100,50) 
survival = Math.ceil(frameCount/frameRate())
  
food()
 obstacles() 
drawSprites();  
}
function food() {
  
  if(World.frameCount % 80 == 0){
   banana = createSprite(400,200,40,10) 
  banana.addImage(bananaImage)
  banana.scale = 0.1
  banana.y = random(120,200)
  banana.velocityX = -4
  banana.lifetime = 100;
  }
     
     
}



function obstacles() {
  
  if(World.frameCount % 300 == 0){
   obstacle = createSprite(200,332,400,400) 
   obstacle.addImage(obstaceImage)
   obstacle.scale = 0.1
   obstacle.x = random(120,200)
   obstacle.velocityX = -4
   obstacle.lifetime = 50;
  }
     
     
}

