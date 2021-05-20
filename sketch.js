var clouds;
var mario;
var Mario;
var ground,invisibleGround;
var pipe,pipes;
var enemy,enemies;
var coin,coins;

function preload() {
  clouds = loadImage("clouds.png")
  ground = loadImage("ground.png")
  pipe = loadImage("pipe.png")
  coin = loadImage("coin.png")
  enemy = loadAnimation("enemy.png","enemy2.png")
  mario = loadAnimation("mario1.png","mario2.png")
  

}

function setup() {
  createCanvas(1200, 400);
  Mario = createSprite(50,330)
  Mario.addAnimation("running",mario)
  Mario.scale = 0.3
  ground1 = createSprite(600,395,1200,10)
  ground1.addImage(ground)
  invisibleGround = createSprite(600,376,1200,10);
  invisibleGround.visible = false;
  
}
function draw() {                  
  background("SkyBlue");
  
  if(keyDown("space") && Mario.y >= 330) {
    Mario.velocityY = -17;
  } 

  Mario.velocityY = Mario.velocityY + 1
  Mario.collide(invisibleGround)

  ground1.velocityX = -6
  if(ground1.x  <0){
    ground1.x = ground1.width/2
  } 
  spawnPipes()
  spawnClouds()
  spawnEnemy()
  spawnCoins()

  drawSprites();
}
function spawnPipes() {
  if (frameCount % 200 === 0) {
    var pipes = createSprite(1200,315,40,10);
    pipes.addImage(pipe);
    pipes.scale = 0.4;
    pipes.velocityX = -3;
    pipes.lifetime = 400;
  }
}

function spawnClouds() {
  if (frameCount % 100 === 0) {
    var cloud = createSprite(1200,120,40,10);
    cloud.y = Math.round(random(40,150));
    cloud.addImage(clouds);
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    cloud.lifetime = 400;
  }
}

function spawnEnemy() {
  if (frameCount % 300 === 0) {
    var enemies = createSprite(1200,300,40,10);
    enemies.addAnimation("hi",enemy);
    enemies.scale = 0.15;
    enemies.velocityX = -3;
    enemies.lifetime = 400;
  }
}

function spawnCoins() {
  if (frameCount % 200 === 0) {
    for (i = 0;i < 5;i++){
    var coins = createSprite(1200 + i * 29,200,40,10);
    coins.addImage(coin);
    coins.scale = 0.07;
    coins.velocityX = -3;
    coins.lifetime = 400;
  }
}
}